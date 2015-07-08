Items = React.createClass({
	mixins: [ReactMeteorData, React.Animate],
    getInitialState: function() {
			return {
				parent_id: this.props.section
			}
	},

	getMeteorData() {
      var products = Meteor.subscribe('products');
      return {
		productsLoading: ! products.ready(),
		products: Products.find({parent_ref: this.state.parent_id}).fetch()
      }
	},

    shouldComponentUpdate(nextProps) {
        return nextProps.section !== this.props.section
    },

    componentWillUpdate() {
        this.setState({parent_id: this.props.section, loading: false})
    },

    componentDidUpdate(prevProps) {
        // console.log('updated')
        TweenMax.staggerFromTo($('.product'), 0.7, {y: 15, opacity: 0}, {y:0, opacity: 1, autoRound: false, force3D: true, ease: Back.easeOut}, 0.07, resetStyle)
        function resetStyle() {
            $('.product').css('transform', 'none')
        }
    },

	render() {
		return (
			<div className = "product-container">
				{this.data.products.map(function(product) {
					return <div key={product._id} className="product" style={styles.product}>{product.title}</div>
				})}
			</div>
		)
	}
});

Items = Radium(Items)

var styles = {
    product: {
        height: '20px',
        position: 'relative',
        padding: '0 10px',
        boxSizing: 'border-box',
        width: '32.33%',
        height: '200px',
        margin: '5px 0.5%',
        float: 'left',
        backgroundColor: 'grey',
        color: 'white'
    }
}
