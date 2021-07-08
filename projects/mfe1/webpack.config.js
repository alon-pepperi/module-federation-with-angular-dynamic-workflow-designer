const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const { merge } = require('webpack-merge');
const deps = require('../../package.json').dependencies;
const webpack = require('webpack');

module.exports = (angularWebpackConfig, options) => {
  const mfConfig = {
  output: {
    uniqueName: "mfe1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  externals: {
    'react': 'React'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
  }),
    new ModuleFederationPlugin({
      remotes: {},
      name: "mfe1",
      filename: "remoteEntry.js",
      exposes: {
        './Download': './projects/mfe1/src/app/download/download.component.ts',
        './Upload': './projects/mfe1/src/app/upload.component.ts',
        './DownloadModule': './projects/mfe1/src/app/download/download.component.ts'
      },
      shared: {
        // ...deps,
        "@angular/core": {  strictVersion: false  },
        "@angular/common": {strictVersion: false   },
        "@angular/material": {strictVersion: false   },
        "@angular/animations": {strictVersion: false   },
        "zone.js": {strictVersion: false   },

      }
    }),
  ],
};


const merged = merge(angularWebpackConfig, mfConfig);
const singleSpaWebpackConfig = singleSpaAngularWebpack(merged, options);

return singleSpaWebpackConfig;
}
