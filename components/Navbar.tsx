import Link from "next/link";
import useResponsiveQuery from "use-responsive-query";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlinePrivacyTip, MdOutlineDocumentScanner } from "react-icons/md";

import Emoji from "./Emoji";

import Drawer from "./Drawer";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "@emotion/styled";

const ContainerStyled = styled.div<{ isSmallDevice: boolean }>`
  ${(props) =>
    props.isSmallDevice &&
    `
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  `}
`;

const Navbar = () => {
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
              <Link href="/docs">
                <li className="mr-6 cursor-pointer">Documentation</li>
              </Link>
              <Link href="/privacy">
                <li className="mr-6 cursor-pointer">Privacy Policy</li>
              </Link>
              <Link href="">
                <li className="mr-6 cursor-pointer">
                  <button className=" border border-white pt-2 pr-6 pl-6 pb-2 border-solid rounded-md hover:bg-slate-600">
                    Login
                  </button>
                </li>
              </Link>
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
                dataSource={[
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
                ]}
              />
            </>
          )}
        </div>
      </ContainerStyled>
    </div>
  );
};

export default Navbar;
