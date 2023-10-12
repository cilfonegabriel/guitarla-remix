import styles from '../styles/shopping.css'
import { useOutletContext } from '@remix-run/react';


export function links() {
    return[
      {
        rel: 'stylesheet',
        href: styles
      }
    ]
}

export function meta() {
    return [
      { title:'GuitarLA - Shopping Cart' },
      { description:'Sale of guitars, music, blog, shopping cart, store' }
    ];
}

function Shopping() {

  const {cart} = useOutletContext()

  return (
    <main className="contenedor">
        <h1 className="heading">Shopping Cart</h1>
        <div className="contenido"> 
            <div className='carrito'>
                <h2>Articles</h2>

                {cart.length === 0 ? 'Empty cart' : (
                  cart.map(product => (
                    <div key={product.id} className='producto'>
                      <div>
                        <img src={product.imagen} alt={`imagen of the product $ {product.name}`} />
                      </div>

                      <div>
                        <p className='nombre'>{product.name}</p>

                        <p className='precio'>$ <span>{product.price}</span></p>
                        <p className='subtotal'>Subtotal: $ <span>{product.amount * product.price}</span></p>

                      </div>
                    </div>
                  ))
                )}
            </div>
            <aside className="resumen">
                <h3>Order Summary</h3>
                <p>Total to pay: $</p>
            </aside>
        </div>


    </main>
  )
}

export default Shopping
