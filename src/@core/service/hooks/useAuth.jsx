import Cookies from 'js-cookie'

export const useAuth = () => {
  const isAuth = Cookies.get('access_token')

  return { isAuth }
}
