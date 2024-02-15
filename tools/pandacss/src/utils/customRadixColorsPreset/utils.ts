import { RadixColorScale } from "./types";

type Recursive = {
  [key: string]: string | Recursive;
};

type ColorScaleEntries = [string, Recursive | string][];

type deleteAlphaColorOption = {
  colorScales: ColorScaleEntries;
};

const deleteAlphaColor = ({ colorScales }: deleteAlphaColorOption) =>
  Object.fromEntries(
    colorScales.reduce<ColorScaleEntries>((acc, [key, value]) => {
      if (key === "black" || key === "white") {
        acc.push([key, value]);
        return acc;
      }
      if (key === "a") {
        return acc;
      }

      if (typeof value === "object" && Number.isNaN(Number(key))) {
        acc.push([
          key,
          deleteAlphaColor({ colorScales: Object.entries(value) }),
        ]);
        return acc;
      }

      acc.push([key, value]);
      return acc;
    }, [])
  );

type RenameScaleOptions = {
  colorScales: ColorScaleEntries;
  renameScale: [RadixColorScale, string][];
};

const renameScaleColor = ({ colorScales, renameScale }: RenameScaleOptions) =>
  Object.fromEntries(
    colorScales.reduce<ColorScaleEntries>((acc, [key, value]) => {
      const renamedScale = renameScale.find(([scale]) => scale === key);

      if (renamedScale) {
        const renamedValue = replaceScaleName({
          colorScales: Object.entries(value),
          targetScale: key,
          replaceName: renamedScale[1],
        });

        acc.push([renamedScale[1], renamedValue]);

        return acc;
      }
      acc.push([key, value]);
      return acc;
    }, [])
  );

type ReplaceScaleNameOptions = {
  colorScales: ColorScaleEntries;
  targetScale: string;
  replaceName: string;
};

const replaceScaleName = ({
  colorScales,
  targetScale,
  replaceName,
}: ReplaceScaleNameOptions) =>
  Object.fromEntries(
    colorScales.reduce<ColorScaleEntries>((acc, [key, value]) => {
      if (key === "value") {
        if (typeof value === "string") {
          const replacedValue = value.replace(targetScale, replaceName);
          acc.push([key, replacedValue]);
          return acc;
        }
        if (typeof value === "object") {
          const reg = new RegExp(targetScale, "g");
          acc.push([
            key,
            Object.fromEntries(
              Object.entries(value).map(([k, v]) => {
                return [k, (v as string).replace(reg, replaceName)];
              })
            ),
          ]);
          return acc;
        }
      }

      acc.push([
        key,
        replaceScaleName({
          colorScales: Object.entries(value),
          targetScale: targetScale,
          replaceName: replaceName,
        }),
      ]);
      return acc;
    }, [])
  );

type CreateAliasColorOptions = {
  referenceColorScales: ColorScaleEntries;
  scaleAliases: [string, string][];
};

const createAliasColors = ({
  referenceColorScales,
  scaleAliases,
}: CreateAliasColorOptions) => {
  return Object.fromEntries(
    referenceColorScales.reduce<ColorScaleEntries>((acc, [key, value]) => {
      const alias = scaleAliases.find(([, alias]) => alias === key);

      if (alias) {
        const replacedValue = replaceAliasColor({
          colorScales: Object.entries(value),
          referenceColorName: key,
        });
        acc.push([alias[0], replacedValue]);
        return acc;
      }
      return acc;
    }, [])
  );
};

type ReplaceAliasColorOptions = {
  colorScales: ColorScaleEntries;
  referenceColorName: string;
  isAlpha?: boolean;
  isP3?: boolean;
  isDark?: boolean;
  tone?: `${number}`;
};

const replaceAliasColor = ({
  colorScales,
  referenceColorName,
  isAlpha = false,
  isP3 = false,
  isDark = false,
  tone = "0",
}: ReplaceAliasColorOptions) => {
  return Object.fromEntries(
    colorScales.reduce<ColorScaleEntries>((acc, [key, value]) => {
      if (!Number.isNaN(Number(key))) {
        acc.push([
          key,
          replaceAliasColor({
            colorScales: Object.entries(value),
            referenceColorName,
            tone: key as `${number}`,
            isAlpha,
            isP3,
            isDark,
          }),
        ]);
        return acc;
      }

      if (key === "a") {
        acc.push([
          key,
          replaceAliasColor({
            colorScales: Object.entries(value),
            referenceColorName,
            tone,
            isAlpha: true,
            isP3,
            isDark,
          }),
        ]);

        return acc;
      }
      if (key === "p3") {
        acc.push([
          key,
          replaceAliasColor({
            colorScales: Object.entries(value),
            referenceColorName,
            tone,
            isAlpha,
            isP3: true,
            isDark,
          }),
        ]);

        return acc;
      }
      if (key === "dark") {
        acc.push([
          key,
          replaceAliasColor({
            colorScales: Object.entries(value),
            referenceColorName,
            tone,
            isAlpha,
            isP3,
            isDark: true,
          }),
        ]);

        return acc;
      }

      if (key === "value") {
        if (typeof value === "string") {
          acc.push([
            key,
            `{colors.${referenceColorName}.${isDark ? "dark" : "light"}.${
              isP3 ? "p3." : ""
            }${isAlpha ? "a." : ""}${tone}}`,
          ]);

          return acc;
        }
        if (typeof value === "object") {
          acc.push([
            key,
            Object.fromEntries(
              Object.entries(value).map(([k, v]) => {
                const colorValue = (() => {
                  switch (k) {
                    case "base":
                      return `{colors.${referenceColorName}.light.${
                        isP3 ? "p3." : ""
                      }${isAlpha ? "a." : ""}${tone}}`;
                    case "_dark":
                      return `{colors.${referenceColorName}.dark.${
                        isP3 ? "p3." : ""
                      }${isAlpha ? "a." : ""}${tone}}`;

                    case "_p3":
                      return `{colors.${referenceColorName}.${
                        isDark ? "dark" : "light"
                      }.p3.${isAlpha ? "a." : ""}${tone}}`;

                    default:
                      return v;
                  }
                })();
                return [k, colorValue];
              })
            ),
          ]);
          return acc;
        }
      }

      acc.push([
        key,
        replaceAliasColor({
          colorScales: Object.entries(value),
          referenceColorName,
          tone,
          isAlpha,
          isP3,
          isDark,
        }),
      ]);
      return acc;
    }, [])
  );
};

export type { Recursive, ColorScaleEntries, deleteAlphaColorOption };
export { deleteAlphaColor, renameScaleColor, createAliasColors };
