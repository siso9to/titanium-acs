function ACSModel() {
	//create object instance, a parasitic subclass of Observable
	var self = {};

	var Cloud = require('ti.cloud');
	Cloud.debug = true;

	self.createUser = function(form){
		Cloud.Users.create({
			username : form.username,
			email:     form.email,
			password : form.password,
			password_confirmation : form.password_confirmation,
			first_name : form.firstName,
			last_name : form.lastName
		}, function(e) {
			if(e.success) {
				// user created successfully
			} else {
				alert(e);
			}
		});
	}
	
	
	self.login = function(form, callback){
		Cloud.Users.login({
			login : form.username,
			password : form.password,
		}, function(e) {
			if(e.success) {
				callback();
			} else {
				alert(e);
			}
		});
	}
	
	self.removeUser = function(form){
		Cloud.Users.remove(function(e) {
			if(e.success) {
				alert('delete ok!');
			} else {
				alert(e);
			}
		});
	}

	
	self.searchUser = function(callback){
		Cloud.Users.search(function(e) {
			if(e.success) {
				callback(e.users);
			} else {
				alert(e);
			}
		});
	}

	self.queryUser = function(where, callback){
		Cloud.Users.query(where, function(e) {
			if(e.success) {
				callback(e.users);
			} else {
				alert(e);
			}
		});
	}
	
	
	return self;
}

module.exports = ACSModel;
