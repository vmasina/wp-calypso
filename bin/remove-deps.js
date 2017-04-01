#!/usr/bin/env node
const fs = require( 'fs' );

const deleteFolderRecursive = ( path ) => {
	fs.readdirSync( path ).forEach( ( file ) => {
		const curPath = path + '/' + file;
		if( fs.lstatSync( curPath ).isDirectory() ) {
			deleteFolderRecursive( curPath );
		} else {
			fs.unlinkSync( curPath );
		}
	} );
	fs.rmdirSync( path );
};

if( fs.existsSync( __dirname + '/../node_modules' ) ) {
	deleteFolderRecursive( __dirname + '/../node_modules' );
}
if( fs.existsSync( __dirname + '/../npm-shrinkwrap.json' ) ) {
	fs.unlinkSync( __dirname + '/../npm-shrinkwrap.json' );
}
