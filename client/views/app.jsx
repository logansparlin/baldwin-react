App = React.createClass({

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
				collection: 'mens-collection',
				parent_id: 'bdwn1'
			}
	},

    clickHandler: function(collection, parent_id) {
        this.setState({collection: collection, parent_id: parent_id})
    },

    render() {
      return (
        <div className="content-container">
            <Nav collection={this.state.collection} sections={this.data.sections} parent_id={this.state.parent_id} navigate={this.clickHandler}/>
        </div>
      )
    }
});
