import { useLayoutEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)

  useLayoutEffect(() => {
    Cookies.get('access_token') && setIsAuth(true)
  }, [])

  return {
    isAuth
  }
}
