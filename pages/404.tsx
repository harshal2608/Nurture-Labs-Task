import styled from "styled-components";
import { BlueButton, RowFixed } from "../styles/Theme/components";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { TYPEWHITE } from "../styles/Theme/text";
import { useRouter } from "next/router";

const PageWrapper = styled.div`
  background: ${({ theme }) => theme.black};
  border-right: 2px solid ${({ theme }) => theme.inputGrey};
  border-left: 2px solid ${({ theme }) => theme.inputGrey};
  padding: 1.25rem 2.5rem;
  flex-grow: 10;
  color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  align-items: center;
`;

function PageNotFound() {
  const router = useRouter();
  const clickhandler = () => {
    router.push("/");
  };
  return (
    <PageWrapper>
      <TYPEWHITE>
        Oops... Im trying to find out what goes here as well
      </TYPEWHITE>

      <BlueButton onClick={clickhandler}>
        <RowFixed gap="10px">
          Go to section 8
          <ArrowRightIcon height={20} />
        </RowFixed>
      </BlueButton>
    </PageWrapper>
  );
}

export default PageNotFound;
