import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  AutoColumn,
  ColumnBetween,
  RowBetween,
  RowFixed,
  Tier,
} from "../../../styles/Theme/components";
import { TYPEHEADER } from "../../../styles/Theme/text";

import { css } from "styled-components";

import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import Section7 from "./section7";
import Section8 from "./section8";
import Home from "./home";
import Documentation from "./documentation";
import ThemeSwitcher from "../../ThemeSwitcher";

import BackIcon from "../../../public/closingicon.svg";
import { GlobeAltIcon } from "@heroicons/react/outline";

const NavigationWrapper = styled.main`
  background: ${({ theme }) => theme.black};
  flex-grow: 1;
  flex-basis: 20vw;
  flex-shrink: 1;
  max-width: 20vw;
  color: ${({ theme }) => theme.white};
  padding: 1.25rem;
`;

const NameLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.darkBlue};
  padding: 8px;
  width: 30px;
  height: 30px;
`;
export const ImageWrapper = styled.div`
  min-width: 20px;
  height: 20px;
`;

export const ItemWrapper = styled.div<{ active: boolean }>`
  &:hover {
    cursor: pointer;
  }
  ${({ active, theme }) =>
    active
      ? css`
          background-color: ${theme.selectedGrey};
          padding: 10px 20px;
          border-radius: 12px;
          width: 100%;
        `
      : null};
`;

const Wrapper = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.selectedGrey};
  padding: 4px 1rem;
`;

function Navigation() {
  const router = useRouter();

  return (
    <NavigationWrapper>
      <ColumnBetween>
        <AutoColumn gap="30px">
          <RowBetween gap="10px">
            <RowFixed gap="10px">
              <NameLogo>N</NameLogo>
              <TYPEHEADER>Name</TYPEHEADER>
            </RowFixed>
            <Image src={BackIcon} alt="back" />
          </RowBetween>

          <Home active={router.pathname === "/"} />
          <Section1 active={router.pathname === "/section1"} />
          <Section2 active={router.pathname === "/section2"} />
          <Section3 active={router.pathname === "/section3"} />
          <Section4 active={router.pathname === "/section4"} />
          <Section5 active={router.pathname === "/section5"} />
          <Section6 active={router.pathname === "/section6"} />
          <Section7 active={router.pathname === "/section7"} />
          <Section8 active={router.pathname === "/section8"} />
          <Documentation active={router.pathname === "/documentation"} />
        </AutoColumn>

        <AutoColumn gap="20px">
          <RowFixed gap="8px">
            <Wrapper>
              <RowFixed gap="5px">
                <NameLogo
                  style={{ height: "18px", width: "18px", fontSize: "10px" }}
                >
                  N
                </NameLogo>
                $0.90
              </RowFixed>
            </Wrapper>
            <Tier style={{ fontSize: "14px", borderRadius: "10px" }}>
              Buy $XYZ
            </Tier>
          </RowFixed>
          <RowFixed gap="10px">
            <GlobeAltIcon
              width={30}
              height={30}
              color="#808191"
              style={{ marginBottom: "8px" }}
            />
            <ThemeSwitcher />
          </RowFixed>
        </AutoColumn>
      </ColumnBetween>
    </NavigationWrapper>
  );
}
export default Navigation;
