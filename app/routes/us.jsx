import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/us.css'

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Us() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Us</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen about us" />
        <div>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Sed ullamcorper ipsum quis posuere dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
            Vestibulum eget neque massa. Praesent lacinia risus elit, sit amet lobortis risus iaculis sit amet. Curabitur bibendum neque quis nunc egestas, vel eleifend dui efficitur. 
            Pellentesque porttitor ante urna, ac hendrerit nisi sodales nec. Donec mattis dapibus nulla at congue. Integer eu tortor volutpat, tempor mi at, congue risus. Vivamus sed quam sed metus interdum tempor sed nec diam.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Us
