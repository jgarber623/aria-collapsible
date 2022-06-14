import pkg from './package.json';
import banner from './config/banner.js';

import { terser } from 'rollup-plugin-terser';

const terserConfig = {
  compress: false,
  mangle: false,
  output: { beautify: true, indent_level: 2 }
};

export default ({ input, name }) => [
  {
    input,
    output: { banner, file: pkg.module, format: 'es' },
    plugins: [terser(terserConfig)]
  },
  {
    input,
    output: { banner, file: pkg.main, format: 'umd', name },
    plugins: [terser(terserConfig)]
  },
  {
    input,
    output: { banner, file: pkg.browser, format: 'umd', name },
    plugins: [terser()]
  }
];
