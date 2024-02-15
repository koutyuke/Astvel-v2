import { Preset } from "@pandacss/dev";
import pandaPreset from "@pandacss/dev/presets";

const essentialPandaPreset = (() => {
	const baseConfig = { ...pandaPreset } as Preset;

	if (baseConfig.theme?.tokens?.colors) {
		baseConfig.theme.tokens.colors = {
			current: { value: "currentColor" },
			black: { value: "#000" },
			white: { value: "#fff" },
			transparent: { value: "rgb(0 0 0 / 0)" },
		};
	}

	if (baseConfig.theme?.breakpoints) {
		baseConfig.theme.breakpoints = {};
	}
	return baseConfig;
})();

export { essentialPandaPreset };
