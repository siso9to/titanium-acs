function UsersView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();	
		
	var table = Ti.UI.createTableView();
	
	self.add(table);
	
	self.addUsers = function(users) {
		var data = [];
		for (var i = 0; i < users.length; i++) {
			data.push({title:users[i].username});
		}
		table.setData(data);
	}
	
	return self;
}

module.exports = UsersView;