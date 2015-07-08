Sections = new Mongo.Collection("sections");
Products = new Mongo.Collection("products");

if(Meteor.isServer) {
  Meteor.publish('sections', function() {
      return Sections.find();
  });
  Meteor.publish('products', function() {
      return Products.find();
  })
}

if(Meteor.isClient) {
  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'))
  })
}
