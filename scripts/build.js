#!/usr/bin/env node

var colors = require('colors'),
	exec = require('child_process').exec,
	pkg = require('../package.json'),
	preamble = '/*!\n' +
		' *  ' + pkg.name + ' ' + pkg.version + '\n' +
		' *\n' +
		' *  ' + pkg.description + '\n' +
		' *\n' +
		' *  Source code available at: ' + pkg.homepage + '\n' +
		' *\n' +
		' *  (c) 2015-present ' + pkg.author.name + ' (' + pkg.author.url + ')\n' +
		' *\n' +
		' *  ' + pkg.name + ' may be freely distributed under the MIT license.\n' +
		' */\n';

exec('$(npm bin)/uglifyjs src/aria-collapsible.js --beautify "indent-level=2" --preamble "' + preamble + '" --output dist/aria-collapsible.js');
exec('$(npm bin)/uglifyjs src/aria-collapsible.js --compress --mangle --preamble "' + preamble + '" --output dist/aria-collapsible.min.js');

console.log(colors.green('aria-collapsible %s built successfully!'), pkg.version);