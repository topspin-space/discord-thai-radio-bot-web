import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import restClient from "../services/restClient";

type SessionContextProps = {
  discordId: string,
  email: string,
  avatar: string,
  username: string,
} 

export const SessionContext = createContext<SessionContextProps | any>(null);

const SessionProvider: React.FC<any> = props => {
  const { children } = props;
  const [session, setSession] = useState<Partial<SessionContextProps>>({})
  const fetchUser = async () => {
    try {
      const response = await restClient.get(process.env.API_SESSION ?? '')
      setSession({
        discordId: response?.id,
        email: response?.email,
        avatar: response?.avatar,
        username: response?.username
      })
    } catch (error) {
      return {};
    }
  };

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  )
}

const useSession = () => {
  const context = useContext<Partial<SessionContextProps>>(SessionContext)
  return context;
}

export { SessionProvider, useSession }