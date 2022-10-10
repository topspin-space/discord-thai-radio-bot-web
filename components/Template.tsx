import Link from 'next/link'
import useResponsiveQuery from "use-responsive-query";
import { RiMenuFill } from "react-icons/ri";
import { MdOutlinePrivacyTip, MdOutlineDocumentScanner } from "react-icons/md";

import Emoji from "./Emoji";

import Drawer from "./Drawer";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import styled from "@emotion/styled";
import Navbar from './Navbar';

interface IPrivacy {
  children: React.ReactNode;
}

const ContainerStyled = styled.div<{ isSmallDevice: boolean }>`
  ${props => props.isSmallDevice && `
    margin-left: 2rem !important;
    margin-right: 2rem !important;
  `}
`

const Template = ({ children }: IPrivacy) => {
  const hamburgerRef = useRef<HTMLDivElement>(null)
  const isLargeDevice = useResponsiveQuery("(min-width: 1200px)");
  const isSmallDevice = useResponsiveQuery("(max-width: 1199px)");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
        setIsOpenDrawer(false)
      }
    }
    document.addEventListener("click", handleClickOutSide, true);

    return () => {
      document.removeEventListener('click', handleClickOutSide, true);
    };
  })


  return (
    <div className="font-noto-sans-thai">
      <header className="pt-6 pb-6 pl-3 bg-slate-700">
        <Navbar />
      </header>
      {children}
      <footer></footer>
    </div>
  );
};

export default Template;
