Items = React.createClass({
	mixins: [ReactMeteorData],

    getInitialState: function() {
			return {
				parent_id: this.props.section,
                loaded: false
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

    componentWillUpdate(nextProps) {
        console.log('will update')
    },

    componentDidUpdate(prevProps) {
        var that = this;
        if(this.state.loaded) {
            TweenMax.staggerFromTo($('.product'), 0.2, {opacity: 1}, {opacity: 0, autoRound: false, force3D: true}, 0.02, updateData);
            function updateData() {
                that.setState({parent_id: that.props.section})
                TweenMax.staggerFromTo($('.product'), 0.7, {y: 10, opacity: 0}, {y:0, opacity: 1, autoRound: false, force3D: true, ease: Back.easeOut}, 0.07, resetStyle)
                function resetStyle() {
                    $('.product').css('transform', 'none')
                }
            }
        }
        this.setState({loaded: true})
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
})

Items = Radium(Items)

var styles = {
    product: {
        height: '20px',
        position: 'relative',
        padding: '0 10px',
        boxSizing: 'border-box',
        width: '49%',
        margin: '5px 0.5%',
        float: 'left',
        backgroundColor: 'grey',
        color: 'white'
    }
}
