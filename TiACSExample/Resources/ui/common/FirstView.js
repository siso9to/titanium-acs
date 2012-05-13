//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();	
	
	var username = Ti.UI.createTextField({
		top: 50,
		height: 30,
		width:150,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	self.add(username);
	
	var password = Ti.UI.createTextField({
		top: 100,
		height: 30,
		width:150,
		borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask: true,
	});
	self.add(password);	
	
	var button = Ti.UI.createButton({
		top: 150,
		height: 30,
		width:75,
		title: 'Login'
	});
	self.add(button);
	
	button.addEventListener('click', function(e) {
		self.fireEvent('login', {
			username: username.value,
			password: password.value,
		});
	});
	
	return self;
}

module.exports = FirstView;
