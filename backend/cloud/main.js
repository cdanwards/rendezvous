var Mandrill = require('mandrill');

function sendTemplate(templateName, params) {
  var promise = new Parse.Promise();

  Mandrill.initialize('2TD2OD-Z5Bx6fCUFI46bTg');
  Mandrill.sendTemplate({
    template_name: templateName,
    template_content: [
      {
        name: "SUBJECT",
        content: params.subject
      },
      {
        name: "FName",
        content: params.firstName
      },
      {
        name: "LName",
        content: params.lastName
      }
    ],
    message: {
      from_email: "rendezvousemailapp@gmail.com",
      to: [{
        email: params.toEmail,
        name: params.firstName + " " + params.lastName
      }]
    }
  }, {
    success: function (httpResponse) {
      console.log(httpResponse);
      promise.resolve("Email sent!");
    },
    error: function (httpResponse) {
      console.error(httpResponse);
      promise.reject("Uh oh, something went wrong");
    }
  });

  return promise;
}

Parse.Cloud.define('appointment', function(request, response) {
  sendTemplate('mandrill-app-test-2', {
    subject: 'YO',
    firstName: request.object.get("firstName"),
    lastName: request.object.get("lastName"),
    toEmail: request.object.get("email")
  }).then(function(){
    response.success();
  }, function(error){
    response.error(error);
  });
});
