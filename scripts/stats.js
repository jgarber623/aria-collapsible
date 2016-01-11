#!/usr/bin/env node

var cliTable = require('cli-table'),
	commaNumber = require('comma-number'),
	fs = require('fs'),
	gzipSize = require('gzip-size'),
	table = new cliTable({
		style: {
			head: ['cyan']
		}
	});

table.push(
	{ 'Uncompressed': commaNumber(fs.statSync('dist/aria-collapsible.js').size) + ' bytes' },
	{ 'Minified': commaNumber(fs.statSync('dist/aria-collapsible.min.js').size) + ' bytes' },
	{ 'Minified and gzipped': commaNumber(gzipSize.sync(fs.readFileSync('dist/aria-collapsible.min.js'))) + ' bytes' }
);

console.log(table.toString());