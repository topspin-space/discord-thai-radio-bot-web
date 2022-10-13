import React, { createContext, useContext, useEffect, useState } from "react";
import restClient from "../services/restClient";

export interface ISession {
  id: string
  username: string
  avatar: string
  avatar_decoration: any
  discriminator: string
  public_flags: number
  flags: number
  banner: any
  banner_color: any
  accent_color: any
  locale: string
  mfa_enabled: boolean
  premium_type: number
  email: string
  verified: boolean
}

type SessionContextProps = {
  discordId: string,
  email: string,
  avatar: string,
  username: string,
} 

export const SessionContext = createContext<SessionContextProps | any>(null);


const SessionProvider: React.FC<{ children: React.ReactNode, data: string }> = props => {
  const { children, data } = props;
  const [session, setSession] = useState<Partial<SessionContextProps>>({})
  const fetchUser = async () => {
    try {
      const cookies = data.split('=')[1]
      const response = await restClient.get(process.env.API_SESSION ?? '') as ISession
      console.log(response)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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