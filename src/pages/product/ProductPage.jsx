import { useEffect } from 'react'
import { Navbar, FabAddNew, ProductModal, ProductCard } from '../../components'
import { useProductStore } from '../../hooks'

export const ProductPage = () => {
  const { products } = useProductStore()

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="text-center">Store app</h1>

        {products.map(({ _id, name, expiration_date, price, stock, tags }) => (
          <ProductCard
            key={_id}
            name={name}
            expiration_date={expiration_date}
            price={price}
            stock={stock}
            tags={tags}
          />
        ))}
      </div>

      <ProductModal />
      <FabAddNew />
    </>
  )
}
