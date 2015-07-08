Nav = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
      var sections = Meteor.subscribe('sections');
      return {
        sectionsLoading: ! sections.ready(),
        sections: Sections.find().fetch()
      }
	},

	getInitialState: function() {
			return {
				active: 'mens-collection',
				parent_id: 'bdwn1'
			}
	},

	clickHandler(slug, parent_id) {
		this.setState({active: slug, parent_id: parent_id})
	},

	render() {
		var that = this;
		return (
			<div>
				<div className="nav-container">
			        {this.data.sections.map(function(section) {
			          return <div key={section._id}
						onClick={that.clickHandler.bind(that, section.slug, section.ref_id)}
						style={[styles.base, (that.state.active === section.slug) ? styles.active : '']}
						className={(that.state.active === section.slug) ? 'active' : ''}>
						{section.title}</div>;
			        })}
		        </div>

				<Items section={this.state.parent_id}/>

			</div>
		)
	}
});

// DO THIS FOR RADIUM STYLES TO WORK
Nav = Radium(Nav)

var styles = {
    base: {
        color: 'white',
		width: '50%',
		float: 'left',
		cursor: 'pointer',
		textAlign: 'center',
		padding: '20px 0',
		backgroundColor: '#333',
        ':hover': {
            backgroundColor: '#444'
        }
    },
	active: {
		backgroundColor: 'red',
		':hover': {
			backgroundColor: 'red'
		}
	}
}
