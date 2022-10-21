import styled from "@emotion/styled";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Template from "../components/Template";
import { useSession } from "../context/session-context";
import { validateCookies } from "../helpers/helpers";
import restClient from "../services/restClient";

type Guilds = {
  id: string;
  name: string;
  icon?: string | null;
  owner: boolean;
  permissions: string;
  features: object;
};

interface IMyServerProps {
  serverBotGuilds: Guilds[];
}

const SubHeadingStyled = styled.div`
  &&::before {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 50%;
    display: inline-block;
    width: 22px;
    margin-left: -11px;
    border-bottom: red dashed 1px;
  }
`;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookiesHeader = validateCookies(context, "DISCORD_SESSION");
  const { data } = await restClient.get("/api/v1/discord/guilds", {
    headers: cookiesHeader,
  });
  return {
    props: {
      serverBotGuilds: data,
    },
  };
}

const MyServer = ({ serverBotGuilds }: IMyServerProps) => {
  const { username } = useSession();
  return (
    <Template>
      <div>
        <section className="max-w-5xl ml-auto mr-auto text-black mt-20 flex justify-center flex-col">
          <div className="mb-12">
            <p className="lg:text-6xl mb-4 sm:text-2xl flex justify-center">
              สวัสดี, {username}
            </p>
            <div className="flex justify-center text-2xl">
              กรุณาเลือก server ของคุณเพื่อเริ่มการทำงาน
            </div>
          </div>
          <div className="rounded-xl pl-8 bg-slate-200 pt-8 pb-8">
            {serverBotGuilds.map((guild) => {
              return (
                <div key={guild.id} className="flex items-center mb-4 mt-9">
                  <div className="mr-4">
                    {guild.icon ? (
                      <Image
                        src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                        width="60px"
                        height="60px"
                        alt=""
                        className="rounded-3xl"
                      />
                    ) : (
                      <Image
                        src={`https://i.pinimg.com/736x/07/60/44/076044059ffca0bef363e7940ea4e3ae.jpg`}
                        width="60px"
                        height="60px"
                        alt=""
                        className="rounded-3xl"
                      />
                    )}
                  </div>
                  <p className="text-3xl mr-4">{guild.name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </Template>
  );
};

export default MyServer;
