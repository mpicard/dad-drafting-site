const path = require('path');
const glob = require('glob');
const PurgeCssPlugin = require('purgecss-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src')
};

const purgeCssConfig = {
  paths: glob.sync(`${PATHS.src}/**/*.js`, { nodir: true }),
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-Za-z0-9-_:/]+/g) || [];
        }
      },
      extensions: [`js`]
    }
  ]
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage == 'build') {
    actions.setWebpackConfig({
      plugins: [new PurgeCssPlugin(purgeCssConfig)],
      optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin()]
      }
    });
  }
};
