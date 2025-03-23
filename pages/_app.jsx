import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const user = true // Beispielwert, ersetze dies durch deine Authentifizierungslogik
      if (user && router.pathname === '/login') {
        router.push('/')
      }
    }
    
    checkAuth()
  }, [router])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp