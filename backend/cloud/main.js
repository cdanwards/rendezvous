var Mandrill = require('mandrill');

function sendTemplate(templateName, params) {
  var promise = new Parse.Promise();

  Mandrill.initialize('2TD2OD-Z5Bx6fCUFI46bTg');
  Mandrill.sendTemplate({
    template_name: templateName,
    global_merge_vars: [
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
      },
      {
        name: "REASON",
        content: params.reason
      },
    ],
    template_content: [],
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

Parse.Cloud.afterSave('appointment', function(request, response) {
  // only if appointment is new
  if(request.object.existed() === false) {
    sendTemplate('mandrill-app-test-2', {
      subject: '',
      firstName: request.object.get('firstName'),
      lastName: request.object.get('lastName'),
      toEmail: request.object.get('email'),
      reason: request.object.get('reason')
    });
  }
});
