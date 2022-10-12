import create from 'zustand'

const store = () => ({
  authURL: 'http://localhost:9000/api/v1/auth/discord'
})

const useStore = create(store)

export default useStore