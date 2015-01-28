var childProcess = require('child_process');

module.exports = {
	checkDirectoryPermissions: function(user, directory, callback){

		var output = "empty";
		var command = 'accesschk ' + user + ' ' + directory + ' -d';
		console.log(command);

		childProcess.exec(command, function(err, stdout){
			if(err!=undefined) console.log('Error with command [' + command +']'+ err);
			
			//look at the output
			var writable = /^.W/; //'RW'|' W'
			var readable = /^R/; //R			

			var properties = 
			{				
				isReadable:readable.test(stdout),
				isWritable:writable.test(stdout),
			};

			callback(err, properties);
		});		
	},
};