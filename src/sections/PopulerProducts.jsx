import {products}  from "../constants"
import ProductCard from "../component/ProductCard"

const PopulerProducts = () => {
  return (
    <>
      <section id="products" className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
          <h1 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h1>
          <p className="text-slate-gray font-montserrat lg:max-w-lg mt-7"> Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 sm:gap-6 gap-14"> 
          {products.map((product) => (
            <ProductCard key={product.name} {...product}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default PopulerProducts;

