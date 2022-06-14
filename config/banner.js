import pkg from '../package.json';

export default `/*!
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
