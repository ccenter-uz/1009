import Cookies from 'js-cookie'

export const logOut = async () => {
  Cookies.remove('access_token')
  window.document.location.href = '/'
}
