Items = React.createClass({
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
		          return <div key={section._id} style={styles.base}>{section.title}</div>;
		        })}
	        </div>
		)
	}
});

// DO THIS FOR RADIUM STYLES TO WORK
Items = Radium(Items)

var styles = {
    base: {
        color: 'blue',
		cursor: 'pointer',
        ':hover': {
            background: '#ddd'
        }
    }
}
