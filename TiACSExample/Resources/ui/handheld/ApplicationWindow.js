//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView'),
	    UsersView = require('ui/common/UsersView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
	});
		
	var firstView = new FirstView();
	var loginContainerWindow = Ti.UI.createWindow({
		title:'Login'
	});
	loginContainerWindow.add(firstView);
	
	var usersView = new UsersView();
	var usersContainerWindow = Ti.UI.createWindow({
		title:'Users'
	});
	usersContainerWindow.add(usersView);

	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:loginContainerWindow
	});
	self.add(navGroup);
	
	firstView.addEventListener('login', function(e) {
		
		var ACSModel = require('model/ACSModel');
		var acs = new ACSModel();
		
		acs.login(e, function(){
			acs.queryUser({
				where: { 
					username: 'siso2'
				},
			},
			function(users){
				usersView.addUsers(users);
			});
			
			// acs.searchUser(function(users){
				// usersView.addUsers(users);
			// })
			navGroup.open(usersContainerWindow);		
		});
		
	});
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
