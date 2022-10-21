import Link from "next/link";
import Image from "next/image"
import useResponsiveQuery from "use-responsive-query";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlinePrivacyTip, MdOutlineDocumentScanner } from "react-icons/md";

import Emoji from "./Emoji";

import Drawer from "./Drawer";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "@emotion/styled";
import useStore from "../store/store";
import { useSession } from "../context/session-context";
import Dropdown from "./Dropdown";


const ContainerStyled = styled.div<{ isSmallDevice: boolean }>`
  ${(props) =>
    props.isSmallDevice &&
    `
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  `}
`;

const DATASOURCES = [
  {
    icon: <MdOutlineDocumentScanner />,
    name: "Documentation",
    url: "/docs",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    name: "Privacy Policy",
    url: "/privacy",
  },
  
] as const

const ProfileButtonMenu = () => {
  const store = useStore((state) => state.logoutURL);

  return (
    <div className="border border-white pt-2 pr-6 pl-6 pb-2 border-solid rounded-md font-bold w-auto">
      <ul>
        <li className="m-3 cursor-pointer flex justify-center">
          <Link href={store}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  )
}

const ProfileButton = ({ source }: { source: any }) => {
  return (
    <Dropdown content={<ProfileButtonMenu />}>
      <div className="bg-slate-700 flex items-center ml-2 border border-white hover:bg-slate-800 border-solid rounded-lg pl-2 pr-2 pt-1 pb-1">
        <Image src={source.avatar} width="40px" height="40px" alt="" className="rounded-3xl"/> 
        <div className="ml-3 font-noto-sans-thai font-bold">{source.username}</div>
      </div>
    </Dropdown>
  );
};

const Navbar = () => {
  const store = useStore((state) => state.authURL);
  const session = useSession()
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const isLargeDevice = useResponsiveQuery("(min-width: 1200px)");
  const isSmallDevice = useResponsiveQuery("(max-width: 1199px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpenDrawer(false);
      }
    };
    document.addEventListener("click", handleClickOutSide, true);

    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
  });

  return (
    <div className="max-w-5xl lg:ml-auto lg:mr-auto md:ml-3">
      <ContainerStyled
        className="flex justify-between items-center"
        isSmallDevice
      >
        <div>
          <Emoji
            symbol="📻"
            label="radio"
            className="lg:text-6xl cursor-pointer"
            href="/"
          />
        </div>
        <div>
          {isLargeDevice && (
            <ul className="flex items-center">
              {
                DATASOURCES.map((source, idx) => (
                  <Link href={source.url} key={idx}>
                    <li className="mr-6 cursor-pointer">{source.name}</li>
                  </Link>
                ))
              }
              <li className="mr-6 cursor-pointer">
                {session.username !== undefined ? (
                  <ProfileButton source={session} />
                ) : (
                  <Link href={store}>
                    <button className=" border border-white pt-2 pr-6 pl-6 pb-2 border-solid rounded-md hover:bg-slate-600 font-bold">
                      Login
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          )}
          {isSmallDevice && (
            <>
              <div ref={hamburgerRef}>
                <RiMenuFill
                  className="font-extrabold text-4xl flex items-center cursor-pointer"
                  onClick={() => setIsOpenDrawer((prev) => !prev)}
                />
              </div>
              <Drawer
                open={isOpenDrawer}
                dataSource={DATASOURCES}
                container={() => {
                  return (
                    <div>
                      {session.username !== undefined ? (
                        <ProfileButton source={session} />
                      ) : (
                        <Link href={store}>
                          <button className=" border border-white pt-2 pr-6 pl-6 pb-2 border-solid rounded-md hover:bg-slate-600 font-bold">
                            Login
                          </button>
                        </Link>
                      )}
                    </div>
                  )
                }}
              />
            </>
          )}
        </div>
      </ContainerStyled>
    </div>
  );
};

export default Navbar;
