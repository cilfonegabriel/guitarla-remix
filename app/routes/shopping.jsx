import styles from '../styles/shopping.css'


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
  return (
    <main className="contenedor">
        <h1 className="heading">Shopping Cart</h1>
        <div className="contenido"> 
            <div className='carrito'>
                <h2>Articles</h2>
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
