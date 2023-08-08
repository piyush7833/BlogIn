import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter, Roboto } from 'next/font/google'  //can directly include google fonts
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/authProvider/AuthProvider'
import { ThemeProvider } from '@/context/themeContext/ThemeContext'

//by default all component render on server side
//to use client side rendering we can use "use Client"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BLogIn',
  description: 'This is th description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Now we can use mode at any page/component */}
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
