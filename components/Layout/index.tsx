import type { ReactElement } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  max-width: 100vw;
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
