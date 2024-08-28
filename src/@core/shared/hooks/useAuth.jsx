import { useLayoutEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(null)
  const cookie = Cookies.get('access_token')

  useLayoutEffect(() => {
    cookie ? setIsAuth(true) : setIsAuth(false)
  }, [cookie])

  return { isAuth }
}
