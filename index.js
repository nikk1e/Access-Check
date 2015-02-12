module.exports = {
	checkDirectoryPermissions: function(user, directory, callback){

		var spawn = require('child_process').spawn;
		var accesschk = spawn('accesschk', ['/accepteula', user,directory,'-d','-q'], {stdio: 'pipe'});

		console.log('pid:' + accesschk.pid);			
		var properties = {};
		var error = "";		

		accesschk.stdout.on('data', function(data){	
			//look at the output
			var writable = /^.W/; //'RW'|' W'
			var readable = /^R/; //R
			properties = 
			{				
				isReadable:readable.test(data),
				isWritable:writable.test(data),
			};									
		});

		accesschk.stderr.on('data', function(data){
			error = data;
		});
	
		accesschk.on('exit', function(code){
			if(code==0)	{
				callback(null, properties);
			}
			else {
				callback(error, {isReadable:false,isWritable:false});
				console.log('Accesschk exited with code: ' + code);
			}			
		});			
	},	
};