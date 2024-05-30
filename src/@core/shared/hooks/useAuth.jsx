import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false)
  const cookie = Cookies.get('access_token')

  useEffect(() => {
    cookie && setIsAuth(true)
  }, [cookie])

  return { isAuth }
}
