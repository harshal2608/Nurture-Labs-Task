import styled from "styled-components";
import Image from "next/image";
import {
  AutoRow,
  BlueButton,
  CancelButton,
  RowFixed,
  IconWrapper,
  AutoColumn,
  RowAround,
} from "../../../styles/Theme/components";
import AVALANCHE from "../../../public/Avalanche.svg";
import WALLET from "../../../public/Wallet.svg";
import { TYPEWHITE } from "../../../styles/Theme/text";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/solid";
import { BackspaceIcon } from "@heroicons/react/outline";

const Profilewrapper = styled.main`
  background: ${({ theme }) => theme.black};
  flex-grow: 1;
  flex-basis: 30vw;
  flex-shrink: 2;
  color: ${({ theme }) => theme.white};
  padding: 1.25rem 2rem;
`;

const ChainWrapper = styled.div`
  background-color: ${({ theme }) => theme.selectedGrey};
  padding: 6px 10px;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  min-width: 20px;
  height: 20px;
`;

const WalletWrapper = styled.div`
  background-color: transparent;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.darkBlue};
  padding: 6px 10px;
`;
const TextInput = styled.input`
  background-color: ${({ theme }) => theme.inputGrey};
  border-radius: 0.75rem;
  outline: none;
  border: none;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fontFamilyInter};
`;

function Profile() {
  return (
    <Profilewrapper>
      <AutoColumn gap="25px">
        <RowFixed gap="10px">
          <ChainWrapper>
            <AutoRow gap="5px">
              <ImageWrapper>
                <Image src={AVALANCHE} alt="Chain" />
              </ImageWrapper>
              <TYPEWHITE>Avalanche</TYPEWHITE>
              <ImageWrapper>
                <ChevronDownIcon />
              </ImageWrapper>
            </AutoRow>
          </ChainWrapper>

          <WalletWrapper>
            <AutoRow gap="10px">
              <ImageWrapper>
                <Image src={WALLET} alt="wallet" />
              </ImageWrapper>
              <TYPEWHITE>0xf6...1353</TYPEWHITE>
              <ImageWrapper>
                <ChevronDownIcon />
              </ImageWrapper>
            </AutoRow>
          </WalletWrapper>
        </RowFixed>

        <RowFixed gap="10px">
          <IconWrapper>
            <ArrowLeftIcon />
          </IconWrapper>
          <TYPEWHITE>Custom link</TYPEWHITE>
        </RowFixed>

        <TYPEWHITE>https://testnet.xyz.xyz/trade?ref=</TYPEWHITE>

        <TextInput type="text" placeholder="Enter" />

        <RowAround>
          <BlueButton>
            <IconWrapper>
              <ExternalLinkIcon />
            </IconWrapper>
            Custom Link
          </BlueButton>
          <CancelButton>
            <IconWrapper>
              <BackspaceIcon />
            </IconWrapper>
            Cancel
          </CancelButton>
        </RowAround>
      </AutoColumn>
    </Profilewrapper>
  );
}
export default Profile;
