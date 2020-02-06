import pkg from './package.json';

import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

const globalName = 'Collapsible';
const srcFilePath = 'src/aria-collapsible.js';

const filesizePluginOptions = {
  format: {
    exponent: 0,
    fullform: true
  },
  theme: 'light'
};

const preamble = `/*!
 *  ${pkg.name} v${pkg.version}
 *
 *  ${pkg.description}
 *
 *  Source code available at: ${pkg.homepage}
 *
 *  (c) 2015-present ${pkg.author.name} (${pkg.author.url})
 *
 *  ${pkg.name} may be freely distributed under the ${pkg.license} license.
 */
`;

export default [
  // aria-collapsible.mjs and aria-collapsible.js
  {
    input: srcFilePath,
    output: [
      {
        file: pkg.module,
        format: 'es'
      },
      {
        file: pkg.main,
        format: 'umd',
        name: globalName
      }
    ],
    plugins: [
      filesize(filesizePluginOptions),
      terser({
        compress: false,
        mangle: false,
        output: {
          beautify: true,
          indent_level: 2,
          preamble: preamble
        }
      })
    ]
  },

  // aria-collapsible.min.js
  {
    input: srcFilePath,
    output: {
      file: pkg.browser,
      format: 'umd',
      name: globalName
    },
    plugins: [
      filesize(filesizePluginOptions),
      terser({
        output: {
          preamble: preamble
        }
      })
    ]
  }
];
