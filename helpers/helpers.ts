import { GetServerSidePropsContext } from 'next';

export const validateCookies = (ctx: GetServerSidePropsContext, customKey: string = 'connect.sid') => {
  const sessionID = ctx.req.cookies[customKey];
  return sessionID
    ? {
        Cookie: `${customKey}=${sessionID}`,
      }
    : {
      Cookie: ``
    };
};
