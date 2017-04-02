#!/usr/bin/env node

const path = require( 'path' );
const child_process = require( 'child_process' );

const eslintBin = path.join( '.', 'node_modules', '.bin', 'eslint' );

const branchName = child_process.execSync( 'git rev-parse --abbrev-ref HEAD' ).toString().trim();
const rev = child_process.execSync( 'git merge-base ' + branchName + ' master' ).toString().trim();
const files = child_process.execSync( 'git diff --name-only ' + rev + '..HEAD' )
	.toString()
	.split( '\n' )
	.map( ( name ) => name.trim() )
	.filter( ( name ) => name.endsWith( '.js' ) || name.endsWith( '.jsx' ) );

const lintResult = child_process.spawnSync( eslintBin, [ '--cache', ...files ], {
	shell: true,
	stdio: 'inherit',
} );

process.exit( lintResult.status );
