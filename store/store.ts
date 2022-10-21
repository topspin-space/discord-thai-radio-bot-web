import create from 'zustand'

const store = () => ({
  authURL: `${process.env.API_HOST}/api/v1/auth/discord`,
  logoutURL: `${process.env.API_HOST}/api/v1/auth/discord/logout`
})

const useStore = create(store)

export default useStore