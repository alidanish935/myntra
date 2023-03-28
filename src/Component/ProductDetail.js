import React, { useContext, } from 'react'
import { DataWishlistContext } from '../DataApp'

const ProductDetail = () => {
    const localContext = useContext(DataWishlistContext)
    const { setWishlist,wishlist ,data,selectedProduct} = localContext
    

    const updateWishlistFn = (item) => {
        setWishlist(wishlist => [...wishlist,item])
    }


    return (
        <div>
            <div>
                {

                    // data.otherImages.map((selectedProduct)=> (
                        <div className='flex imageDetailMain'>
                            <div className=' imageTitle'>

                                   
                                {/* <h3>{selectedProduct.description}</h3> */}
                                

                                <div className='flex productDetailImges'>
                                    <div className='imageDetailInside'><img src={selectedProduct.otherImages[0]} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={selectedProduct.otherImages[1]} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={selectedProduct.otherImages[2]} width='330px' alt='product' /> </div>
                                    <div className='imageDetailInside'><img src={selectedProduct.otherImages[3]} width='330px' alt='product' /> </div>
                                </div>


                            </div>
                            <div className='imageDescription'>
                                <h2>{selectedProduct.name.toUpperCase()} </h2>
                                <div className='imageDescription_product'>{selectedProduct.description}</div>
                                <div className='line'></div>
                                <div className=' flex  '>
                                            <div>
                                            < span className='price'>RS. {selectedProduct.finalPrice}&nbsp;&nbsp;</span></div>
                                            <span className='price strickprice'>{selectedProduct.strickPrice}&nbsp;&nbsp;</span>
                                            <span className='price discount'> {selectedProduct.discount}% &nbsp;OFF</span>
                                        </div>
                                            <div className='tax'> inclusive of all taxes</div>
                               
                               <div className=' '>
                                            <h2>SIZE</h2>
                                        {/* <div className='roundDiv flex  selectedProductscenter justify-center'>{selectedProduct.productSize}</div> */}
                                        <div className='productSize'>{selectedProduct.productSize}</div>
           
                               </div>
                                <div className='flex '> 
                                <button className='button' onClick={(e)=>updateWishlistFn(selectedProduct)} > Add to wishlist</button>

                                {/* <button className='button' onClick={(e) => setWishlist(whishlist => whishlist + 1)} >Add To Cart</button> */}
                                {/* <button  className='button'>Add To Cart</button> */}
                                {/* onClick={(e) => setCart(cart => cart + 1)} */}
                                   </div>
                            </div>
                        </div>
                    // ))

                }
            </div>
        </div>
    )
}

export default ProductDetail