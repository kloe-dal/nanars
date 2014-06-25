Template.subscribe.events({
  'submit form': function(event) {
    event.preventDefault();
    Emails.insert({email: $("input").val()});
    $("input").val("");
  },
})