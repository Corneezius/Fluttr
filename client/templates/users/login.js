Template.login.rendered = function() {
    var videobackground = new $.backgroundVideo($('#bgVideo'), {
            "align" : "centerXY",
            "path" : "/video/",
            "width": 1215,
            "height": 717,
            "filename" : "Fluttr7",
            "types" : ["mp4"]
        });
}

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
    },
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    }
});

