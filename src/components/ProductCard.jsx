import {Link} from 'react-router-dom'

const ProductCard = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <Link to={`/products/${product.id}`}>view details </Link>
    </div>
  )
}

export default ProductCard
