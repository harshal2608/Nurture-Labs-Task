import type { ReactElement } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import styled from "styled-components";

const LayoutWrapper = styled.body`
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: stretch;
  justify-content: flex-start;
`;

function Layout({ children }: { children: ReactElement }) {
  return (
    <LayoutWrapper>
      <Navigation />
      {children}
      <Profile />
    </LayoutWrapper>
  );
}

export default Layout;
