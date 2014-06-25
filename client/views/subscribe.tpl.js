Template.subscribe.events({
  'submit form': function(event) {
    event.preventDefault();
    console.log($("input").val());
  },
})