import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from 'next/router'
import { useSession } from "../context/session-context";

const Redirect = () => {
  const sessions = useSession();
  const router = useRouter();
  const [_, setCookie] = useCookies();
  useEffect(() => {
    setCookie("discordId", sessions.discordId);
    router.push('/')
  }, [
    sessions.discordId,
    setCookie,
    router
  ]);
  return <>Redirect...</>;
};

export default Redirect;
