import { createContext, useContext, useEffect, useState } from "react"

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ isLoggedIn: false })

  const loginUser = (data) => {
    let newUser = { ...data, isLoggedIn: true }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  const logoutUser = () => {
    let newUser = { isLoggedIn: false }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  useEffect(() => {
    let loadedUser = JSON.parse(localStorage.getItem("user"))
    if (loadedUser === null)
      return localStorage.setItem("user", JSON.stringify(user))
    if (loadedUser.isLoggedIn) return loginUser(loadedUser)
  }, [])

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default () => {
  return useContext(UserContext)
}