#!/usr/bin/env node

var cliTable = require('cli-table'),
	fs = require('fs'),
	gzipSize = require('gzip-size'),
	table = new cliTable({
		style: {
			head: ['cyan']
		}
	});

table.push(
	{ 'Uncompressed': fs.statSync('dist/aria-collapsible.js').size + ' bytes' },
	{ 'Minified': fs.statSync('dist/aria-collapsible.min.js').size + ' bytes' },
	{ 'Minified and gzipped': gzipSize.sync(fs.readFileSync('dist/aria-collapsible.min.js')) + ' bytes' }
);

console.log(table.toString());