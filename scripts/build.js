#!/usr/bin/env node

var exec = require('child_process').exec,
	pkg = require('../package.json'),
	year = new Date().getFullYear(),
	preamble = '/*!\n' +
		' *  ' + pkg.name + ' ' + pkg.version + '\n' +
		' *\n' +
		' *  ' + pkg.description + '\n' +
		' *\n' +
		' *  Source code available at: ' + pkg.homepage + '\n' +
		' *\n' +
		' *  (c) 2015-' + (year === 2015 ? 'present' : year) + ' ' + pkg.author.name + ' (' + pkg.author.url + ')\n' +
		' *\n' +
		' *  ' + pkg.name + ' may be freely distributed under the MIT license.\n' +
		' */\n';

	exec('uglifyjs src/aria-collapsible.js --beautify "indent-level=2" --preamble "' + preamble + '" --output dist/aria-collapsible.js');
	exec('uglifyjs src/aria-collapsible.js --compress --mangle --preamble "' + preamble + '" --output dist/aria-collapsible.min.js');