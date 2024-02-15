/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@astvel/core"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true,
  },
};
