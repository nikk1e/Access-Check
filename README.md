access-check
=========
Node package, calls out to SysInternals tool AccessChk for given user and returns effective permissions on item

## Pre-requisites
	Download AccessChk and ensure it resides in somewhere accessible from the PATH.  Note the process which is calling the node application must have access to run AccessChk (System doesnt...)

## Installation

	npm install access-check

## Usage

 	var acheck = require('access-check'),

 	var checkDirectoryPermissions = acheck.checkDirectoryPermissions('userName','DirectoryPath', function(err,out){
 		//Callback code here
 		//JSON Object returned with two boolean properties isReadable|isWritable
 	});

