import './globals.css'

export const metadata = {
  title: 'Saul n Ivan Surf Camp | Escuela y Surf Camps en Famara, Lanzarote',
  description: 'Aprende y perfecciona tu surf en la Reserva Natural de Famara con Saul & Ivan. Cursos para todos los niveles, alojamiento en surf houses frente al mar, material y la mejor vibra.',
  keywords: 'surf camp, lanzarote surf, famara surf, saul n ivan, surf school canary islands, surf camp espana',
  other: {
    google: 'notranslate',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth notranslate" translate="no" suppressHydrationWarning>
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
