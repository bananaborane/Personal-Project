import React, { Component } from 'react'
import './EachProduct.css'
import Header2 from './../Header2/Header2'
import Footer2 from './../Footer2/Footer2'
import { connect } from 'react-redux';
import { reduxHandleChange } from './../../ducks/userReducer'
import { displayTheProduct } from './../../ducks/productsReducer'

export class EachProduct extends Component {

  componentDidMount(){
    let { params } = this.props.match;
    this.props.displayTheMensProduct('mens', params.id)
    console.log(params)
  }

  render() {
    let { title, description, image_url, price, type, product_id } = this.props.products.theProduct;
    return (
      <div>
        <Header2/>
          <div className='each-product'>
            From EachProduct.jsx
            <img src={image_url} alt={title} width={220} />
            {title}
            {description}
            {price}
            {type}
          </div>
        <Footer2/>
      </div>
    )
  }
}



let mapStateToProps = (reduxState)=>{
  return {
    user: reduxState.user,
    products: reduxState.products
  }
}

export default connect(mapStateToProps, { reduxHandleChange, displayTheProduct })(
  EachProduct
  )
