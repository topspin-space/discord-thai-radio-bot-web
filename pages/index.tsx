import type { NextPage } from "next";
import { BsDiscord } from 'react-icons/bs'
import Link from 'next/link'
import Template from "../components/Template";

const Home: NextPage = () => {
  return (
    <Template>
      <section className="h-96 block box-border header__clip-path bg-slate-700">
        <div className="font-noto-sans-thai max-w-5xl ml-auto mr-auto h-80 flex justify-center items-center flex-col">
          <p
            className="lg:text-8xl mb-4 sm:text-4xl"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            สถานีวิทยุไทยบอท
          </p>
          <span className="text-center md:text-md lg:text-lg font-bold" data-aos="fade-up">
            A discord music/radio bot that play thai radio live streams radio 24/7
          </span>
          <div className="mt-8 w-auto" data-aos="fade-up">
            <Link href="https://discord.com/oauth2/authorize?client_id=788715436954746921&permissions=8&scope=bot&fbclid=IwAR0B9_2GutaND9eWSlcBT7Fd0XP50AGVbDmVgzzJVrNWH098dvHTTvULy28">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center">
                <BsDiscord className="mr-2"/> Invite bot to discord
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Template>
  );
};

export default Home;
