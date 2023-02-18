const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/**
 * @type {import('next').NextConfig}
 */
const config = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  // assetPrefix: '/public/tools/json-tool/',
  compiler: {
    styledComponents: true,
  },
};

module.exports = withBundleAnalyzer(config);
