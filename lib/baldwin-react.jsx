Sections = new Mongo.Collection("sections");

if(Meteor.isServer) {
  Meteor.publish('sections', function() {
    return Sections.find();
  });
}

if(Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'))
  })
}
