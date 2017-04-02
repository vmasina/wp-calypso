#!/usr/bin/env node
const fs = require( 'fs' );

if ( process.argv.length < 3 ) {
	process.exit( 1 );
}

const target = process.argv[ 2 ];
const extensions = process.argv.slice( 3 );

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

const deleteFiles = ( path, extensions ) => {
	fs.readdirSync( path ).forEach( ( file ) => {
		if ( extensions
				.map( ( ext ) => file.endsWith( ext ) )
				.filter( Boolean )
				.length ) {
			fs.unlinkSync( path + '/' + file );
		}
	} );
};

if( fs.existsSync( target ) ) {
	if( fs.lstatSync( target ).isDirectory() ) {
		if ( extensions.length ) {
			deleteFiles( target, extensions );
		} else {
			deleteFolderRecursive( target );
		}
	} else {
		fs.unlinkSync( target );
	}
}
