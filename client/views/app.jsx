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
        <Items />
      )
    }
});
