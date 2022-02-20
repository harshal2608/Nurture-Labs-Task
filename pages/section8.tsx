import { InferGetStaticPropsType } from "next";
import styled from "styled-components";
import {
  RowBetween,
  RowFixed,
  AutoColumn,
  BlueButton,
  Button,
  IconWrapper,
  Tier,
} from "../styles/Theme/components";
import Image from "next/image";
import WALLET from "../public/Wallet.svg";
import LOREMIPSEM from "../public/LoremIpsem.svg";
import MONEYBAG from "../public/Moneybag.svg";
import { TYPEGREY, TYPEWHITE } from "../styles/Theme/text";
import { ExternalLinkIcon, DuplicateIcon } from "@heroicons/react/solid";
import Tabs from "../components/Tabs";
import axios from "axios";

const PageWrapper = styled(AutoColumn)`
  background: ${({ theme }) => theme.black};
  border-right: 2px solid ${({ theme }) => theme.inputGrey};
  border-left: 2px solid ${({ theme }) => theme.inputGrey};
  flex-grow: 3;
  flex-shrink: 4;
  padding: 1.25rem 2.5rem;
  color: ${({ theme }) => theme.white};
`;

const WalletWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  padding: 8px 0.75rem;
`;

const Amount = styled.div`
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0ch;
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamilyInter};
  border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
  padding-bottom: 4px;
`;

const LoremIpsem = styled.div`
  background-color: ${({ theme }) => theme.lightBlue};
  color: ${({ theme }) => theme.black};
  border-radius: 10px;
  padding: 1rem 1.5rem;
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  position: absolute;
  right: 0;
  top: -8px;
`;
const RewardsWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  padding: 2rem 3.5rem 2rem 1.5rem;
  border-radius: 2rem;
`;
const Bin = styled.div`
  background-color: ${({ theme }) => theme.selectedGrey};
  border-radius: 11px;
  padding: 3px 8px;
  font-size: 12px;
`;

const ReferalWrapper = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 1rem;
  padding: 1.5rem;
  width: 100%;
`;

const CopyWrapper = styled.div`
  background-color: ${({ theme }) => theme.inputGrey};
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
`;

export type tableData = [
  {
    img: string;
    amount: number;
    asset: string;
    chain: {
      img: string;
      name: string;
    };
    referral_earnings: number;
    state: string;
    type: string;
    user: string;
  }
];

const Section8 = ({
  tableData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <PageWrapper gap="20px">
      <RowBetween>
        <Header>Section</Header>
        <WalletWrapper>
          <RowFixed gap="1rem">
            <Image src={WALLET} alt="Wallet" />
            <Amount> 0.2 $XYZ</Amount>
            <Tier>Tier 1</Tier>
          </RowFixed>
        </WalletWrapper>
      </RowBetween>
      <LoremIpsem>
        <RowBetween>
          <AutoColumn gap="5px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <Button>Tutorial</Button>
          </AutoColumn>
          <ImageWrapper>
            <Image src={LOREMIPSEM} alt="lorem" />
          </ImageWrapper>
        </RowBetween>
      </LoremIpsem>

      <RewardsWrapper>
        <AutoColumn gap="10px">
          <TYPEWHITE style={{ fontSize: "18px" }}>Your rewards</TYPEWHITE>
          <RowBetween>
            <TYPEWHITE style={{ fontSize: "28px" }}>$ 0.26231428</TYPEWHITE>
            <BlueButton>
              <IconWrapper>
                <ExternalLinkIcon />
              </IconWrapper>
              Custom Link
            </BlueButton>
          </RowBetween>
          <RowFixed gap="5px">
            <Bin>$40 AVAX</Bin>
            <Bin>$10 BNB</Bin>
            <Bin>$210 BTC</Bin>
          </RowFixed>
        </AutoColumn>
      </RewardsWrapper>

      <RowBetween gap="1.25rem">
        <ReferalWrapper>
          <AutoColumn gap="15px">
            <RowFixed gap="8px">
              <IconWrapper>
                <Image src={MONEYBAG} alt="moneybg" />
              </IconWrapper>
              <TYPEWHITE style={{ fontFamily: "1.25rem" }}>
                12.5% of fee
              </TYPEWHITE>
            </RowFixed>
            <TYPEGREY>Your Referral Link for xyz</TYPEGREY>
            <CopyWrapper>
              <RowBetween>
                <TYPEWHITE>https://unityexchange.design </TYPEWHITE>
                <IconWrapper>
                  <DuplicateIcon />
                </IconWrapper>
              </RowBetween>
            </CopyWrapper>
          </AutoColumn>
        </ReferalWrapper>
        <ReferalWrapper>
          <AutoColumn gap="15px">
            <RowFixed gap="8px">
              <IconWrapper>
                <Image src={MONEYBAG} alt="moneybg" />
              </IconWrapper>
              <TYPEWHITE style={{ fontFamily: "1.25rem" }}>
                12.5% of fee
              </TYPEWHITE>
            </RowFixed>
            <TYPEGREY>Your Referral Link for xyz</TYPEGREY>
            <CopyWrapper>
              <RowBetween gap="2rem">
                <TYPEWHITE>https://unityexchange.design </TYPEWHITE>
                <IconWrapper>
                  <DuplicateIcon />
                </IconWrapper>
              </RowBetween>
            </CopyWrapper>
          </AutoColumn>
        </ReferalWrapper>
      </RowBetween>

      <Tabs data={tableData} />
    </PageWrapper>
  );
};

export async function getStaticProps() {
  try {
    const jsonResponse = await axios.get(
      "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
    );
    const tableData: tableData = jsonResponse.data.data;
    return {
      props: {
        tableData,
      },
    };
  } catch (e) {
    throw e;
  }
}

export default Section8;
