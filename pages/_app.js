import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getCurrentUser } from '../lib/auth'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const user = await getCurrentUser()
      
      if (!user && router.pathname !== '/login') {
        router.push('/login')
      }
      
      if (user && router.pathname === '/login') {
        router.push('/')
      }
    }
    
    checkAuth()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp