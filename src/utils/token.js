const getToken = () => {
  window.sessionStorage.token
}
const setToken = (token) => {
  window.sessionStorage.token = token
}
const removeToken = () => {
  window.sessionStorage.removeItem('token')
}
const setUser = (user) => {
  window.sessionStorage.user = user  
}
const getUser = () => {
 return window.sessionStorage.user
}
const setScrolltop = (scrolltop) => {
  window.sessionStorage.scrolltop = scrolltop
}
const getScrolltop = () => {
  return  window.sessionStorage.scrolltop
}
export {
  getToken,
  setToken,
  setUser,
  removeToken,
  getUser,
  setScrolltop,
  getScrolltop
}