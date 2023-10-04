import { Meta, Links, Outlet } from '@remix-run/react';
import styles from './styles/index.css'

export function meta() {
  return [
    { charset:'utf-8' },
    { title:'GuitarLA - Remix' },
    { viewport:'width=device-width, initial-scale=1' }
  ];
}


export function links() {
    return[
        {
            rel: 'stylesheet',
            href : 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel:"preconnect",
            href:"https://fonts.googleapis.com"
        },
        {
            rel:"preconnect",
            href:"https://fonts.gstatic.com",
            crossorigin: "true"
        },
        {
            rel:"stylesheet",
            href:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Roboto:wght@400;700;900&display=swap"
        },
        {
            rel: 'StyleSheet',
            href: styles
        }
    ]
}

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

function Document({ children }) {
  return (
    <html lang="es">
      <head>
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}
