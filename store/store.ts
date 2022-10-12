import create from 'zustand'

const store = () => ({
  authURL: `${process.env.API_HOST}/api/v1/auth/discord`
})

const useStore = create(store)

export default useStore