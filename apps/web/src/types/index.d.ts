declare module "*.svg" {
	const content: React.FC<React.SVGProps<SVGElement>>;
	// biome-ignore lint/style/noDefaultExport: <explanation>
	export default content;
}
