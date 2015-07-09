Nav = React.createClass({

	clickHandler(slug, parent_id) {
		this.props.navigate(slug, parent_id)
	},

	render() {
		var that = this;
		return (
			<div>
				<div className="nav-container">
			        {this.props.sections.map(function(section) {
			          return <div key={section._id}
						onClick={that.clickHandler.bind(that, section.slug, section.ref_id)}
						style={[styles.base, (that.props.collection === section.slug) ? styles.active : '']}
						className={(that.props.collection === section.slug) ? 'active' : ''}>
						{section.title}</div>;
			        })}
		        </div>

				<Items key="items" section={this.props.parent_id}/>

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
		backgroundColor: '#333'
    },
	active: {
		backgroundColor: 'red'
	}
}
