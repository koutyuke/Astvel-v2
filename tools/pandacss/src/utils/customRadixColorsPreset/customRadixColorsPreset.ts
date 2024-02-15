import { Preset } from "@pandacss/dev";
import radixColorsPreset from "pandacss-preset-radix-colors";
import { RadixColorScale } from "./types";
import {
  ColorScaleEntries,
  createAliasColors,
  deleteAlphaColor,
  renameScaleColor,
} from "./utils";

type CustomRadixColorsPresetOptions = {
  scaleAliases?: Record<string, RadixColorScale>;
  renameScale?: Partial<Record<RadixColorScale, string>>;
  withoutAlpha?: boolean;
} & Parameters<typeof radixColorsPreset>[0];

/**
 * Generates a Custom Radix colors preset
 * @param options - The options for generating the preset.
 * @param options.scaleAliases - The scale alias map.
 * @param options.renameScale - The scale rename map. If the scale is renamed, the alias will be renamed as well.
 * @param options.withoutAlpha - Whether to remove the alpha channel from the color scales.
 * @param options.includedRadixScales - The included radix scales.
 *  @example
 * ```ts
 * const preset = customRadixColorsPreset({
 *    // The cement alias is mapped to foo renamed gray scale.
 *    scaleAliases: { rose: "ruby", mango: "orange", ramon: "yellow", cement: "gray" },
 *    renameScale: { gray: "foo" },
 *    colorScales: ["red", "cyan", "green"],
 *    withoutAlpha: true,
 * });
 *
 * ```
 * @returns The generated preset.
 */
const customRadixColorsPreset = ({
  scaleAliases = {},
  renameScale = {},
  withoutAlpha = false,
  ...baseOptions
}: CustomRadixColorsPresetOptions) => {
  const explicitlyIncludedScales: RadixColorScale[] =
    baseOptions.colorScales || [];

  const referencedAliasScales: RadixColorScale[] = Object.values(scaleAliases);

  const renameScaleEntries = Object.entries(renameScale) as [
    RadixColorScale,
    string
  ][];

  const referencedRenameScales: RadixColorScale[] = renameScaleEntries.map(
    ([scale]) => scale
  );

  const dependentScales: RadixColorScale[] = [
    ...new Set([
      ...explicitlyIncludedScales,
      ...referencedAliasScales,
      ...referencedRenameScales,
    ]),
  ];

  const renamedScaleAliases = Object.entries(scaleAliases).reduce<
    [string, string][]
  >((acc, [alias, scale]) => {
    const renamedScaleName = renameScale[scale];

    if (renamedScaleName) {
      acc.push([alias, renamedScaleName]);
      return acc;
    }
    acc.push([alias, scale]);
    return acc;
  }, []);

  const basePreset = radixColorsPreset({
    ...baseOptions,
    colorScales: dependentScales,
  });

  const baseColor = withoutAlpha
    ? deleteAlphaColor({
        colorScales: Object.entries({
          ...basePreset.theme?.extend?.semanticTokens?.colors,
        }) as ColorScaleEntries,
      })
    : { ...basePreset.theme?.extend?.semanticTokens?.colors };

  const renamedScaleColor = renameScaleColor({
    colorScales: Object.entries(baseColor) as ColorScaleEntries,
    renameScale: renameScaleEntries,
  });

  const aliasColors = createAliasColors({
    referenceColorScales: Object.entries(
      renamedScaleColor
    ) as ColorScaleEntries,
    scaleAliases: renamedScaleAliases,
  });

  const preset: Preset = { ...basePreset };
  if (preset.theme?.extend?.semanticTokens?.colors) {
    preset.theme.extend.semanticTokens.colors = {
      ...renamedScaleColor,
      ...aliasColors,
    } as typeof preset.theme.extend.semanticTokens.colors;
  }
  return preset;
};

export { customRadixColorsPreset };
