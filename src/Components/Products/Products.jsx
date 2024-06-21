import './Products.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import noimg from './noimg.png'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      axios(`http://makeup-api.herokuapp.com/api/v1/products.json`)
      .then(response => setProducts(response.data.slice(0, 8)))
    }, [])

    console.log(products);

  return (
    <>
      <section className='products'>
            <div className='container'>
                <div className='products__wrapper'>
                        <div className='products__items'>
                            <h2 className='products__items-head'>НОВИНКИ</h2>
                            <div className='products__items-cards'>
                                {
                                    products.map(p => (
                                      <div className='card' key={p.id}>
                                         <img height={93} width={93} src={p.api_featured_image ? p.api_featured_image : noimg} alt="" /> 
                                      </div>
                                    ))
                                }
                            </div>
                        </div>
                </div>
            </div>
      </section>
    </>
  )
}

export default Products