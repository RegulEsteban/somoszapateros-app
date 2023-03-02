import React from 'react'
import Product from './Product'

const Products = ({products}) => {
  return (
    <>
        <div className="bg-cover bg-center h-auto text-white py-24 object-fill bg-gradient-to-b from-sz-brown-dark via-sz-brown to-sz-brown-light">
            <div className="max-w-[1240px] m-auto p-4">
                <p className="font-bold text-sm uppercase pt-5">Services</p>
                <p className="text-5xl font-bold">Somos Artesanos</p>
                <p className="text-lg mb-10 leading-none">Atractive designs for your brand</p>
                <a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a>
            </div>  
        </div>
        <div className='mx-auto p-4'>
            <div className="flex flex-wrap">
                {products && products.length > 0 ? products.map(product => (
                    <div className="my-4 px-4 md:w-1/2 xl:w-1/3" key={product.id}>
                        <Product product={product}></Product>
                    </div>
                )) : null}
            </div>
        </div>
    </>
  )
}

export default Products