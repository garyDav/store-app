import { Navbar, FabAddNew, ProductModal } from '../../components'

export const ProductPage = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1 className="text-center">Store app</h1>

        <div className="card" style={{ width: '18rem' }}>
          <img
            src="https://placehold.co/286x180"
            className="card-img-top"
            alt="Product Image"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>

      <ProductModal />
      <FabAddNew />
    </>
  )
}
