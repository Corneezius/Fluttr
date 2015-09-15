Template.signIn.events({
  'submit form': function(event) {
        event.preventDefault();
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        }, function(err) {
        	if (err) {
        		console.log(err);
    		}else{
        		console.log("Registered!");
        	}
        });
    }
});
