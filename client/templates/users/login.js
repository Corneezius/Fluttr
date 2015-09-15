Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar, function(err){
        	if (err) {
        		console.log(err);
        	}else{
        		console.log("User signed in");
        	}
        });
    },
    'click .register-link': function(event){
    	event.preventDefault();
    	IonModal.open('signIn');
            return;
    }
});