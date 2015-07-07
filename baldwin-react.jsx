Sections = new Mongo.Collection("sections");

if(Meteor.isServer) {
  Meteor.publish('sections', function() {
    return Sections.find();
  });
}

if (Meteor.isClient) {
  App = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData: function() {
      var sections = Meteor.subscribe('sections');
      return {
        sectionsLoading: ! sections.ready(),
        sections: Sections.find().fetch()
      }
    },
    render() {
      return (
        <div className="site-wrapper">
        {this.data.sections.map(function(section) {
          return <div key={section._id}>{section.title}</div>;
        })}
        </div>
      )
    }
  });

  Meteor.startup(function() {
    React.render(<App />, document.getElementById('app'))
  })
}
