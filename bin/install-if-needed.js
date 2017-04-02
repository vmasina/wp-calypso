#!/usr/bin/env node

const fs = require( 'fs' );
const spawnSync = require( 'child_process' ).spawnSync;

const needsInstall = () => {
	try {
		const shrinkwrapTime = fs.statSync( 'npm-shrinkwrap.json' ).mtime;
		const nodeModulesTime = fs.statSync( 'node_modules' ).mtime;
		return shrinkwrapTime - nodeModulesTime > 5000;
	} catch ( e ) {
		return true;
	}
};

if ( needsInstall() ) {
	const installResult = spawnSync( 'npm', [ 'install' ], {
		shell: true,
		stdio: 'inherit',
	});
	process.exit( installResult.status );
}
