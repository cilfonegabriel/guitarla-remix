import { useEffect,useState } from 'react';
import styles from '../styles/shopping.css'
import { useOutletContext } from '@remix-run/react';
import { ClientOnly } from "remix-utils/client-only";

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

  const [total, setTotal] = useState(0)
  const {cart, updateAmount, deleteGuitar } = useOutletContext()

  useEffect (() => {
    const calulateTotal = cart.reduce((total, product) => total + (product.amount * product.price), 0)
    setTotal(calulateTotal)
  }, [cart])

  return (
    <ClientOnly fallback={'cargando...'}>
      {() =>(
      <main className="contenedor">
          <h1 className="heading">Shopping Cart</h1>
          <div className="contenido"> 
              <div className='carrito'>
                  <h2>Articles</h2>

                  {cart?.length === 0 ? 'Empty cart' : (
                    cart?.map(product => (
                      <div key={product.id} className='producto'>
                        <div>
                          <img src={product.imagen} alt={`imagen of the product $ {product.name}`} />
                        </div>

                        <div>
                          <p className='nombre'>{product.name}</p>
                          <p>Amount:</p>

                          <select 
                            value={product.amount}
                            className='select'
                            onChange={e => updateAmount({
                              amount: +e.target.value,
                              id: product.id
                            })}
                            
                          >
                            <option value="0">-- Select --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>

                          <p className='precio'>$ <span>{product.price}</span></p>
                          <p className='subtotal'>Subtotal: $ <span>{product.amount * product.price}</span></p>

                        </div>

                        <button 
                          type='button'
                          className='btn_eliminar'
                          onClick={() => deleteGuitar(product.id)}
                        >X</button>
                      </div>
                    ))
                  )}
              </div>
              <aside className="resumen">
                  <h3>Order Summary</h3>
                  <p>Total to pay: ${total}</p>
              </aside>
          </div>
      </main>
      )}
    </ClientOnly>
  )
}

export default Shopping
