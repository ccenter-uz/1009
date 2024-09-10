import Cookies from 'js-cookie'

export const logOut = async () => {
  Cookies.remove('access_token'),
  Cookies.remove('userInfo'),
  window.document.location.href = '/',
  sessionStorage.clear()
}
