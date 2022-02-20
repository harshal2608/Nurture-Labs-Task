import Image from "next/image";
import styled from "styled-components";

import { tableData } from "../../pages/section8";
import { shortenAddress } from "../../utils";

import { ExternalLinkIcon } from "@heroicons/react/outline";
import { TYPEGREY, TYPEWHITE } from "../../styles/Theme/text";
import { AutoColumn, RowFixed } from "../../styles/Theme/components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 5px;
`;
const StyledRow = styled.tr``;
const StyledTH = styled.th`
  padding: 15px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.textColor};
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.fontFamilyInter};

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
const StyledTD = styled.td`
  background-color: rgba(36, 39, 49, 0.4);
  text-align: center;
  padding: 15px 0px;
  font-family: ${({ theme }) => theme.fontFamilyInter};

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const ChainWrapper = styled.div`
  background-color: ${({ theme }) => theme.selectedGrey};
  border-radius: 8px;
  display: flex;
  padding: 2px 8px;
  gap: 4px;
`;
function Table({ data }: { data: tableData }) {
  return (
    <StyledTable>
      <thead>
        <StyledRow>
          <StyledTH>Asset</StyledTH>
          <StyledTH>Amount</StyledTH>
          <StyledTH>User Account</StyledTH>
          <StyledTH>Referal Earning</StyledTH>
        </StyledRow>
      </thead>

      <tbody>
        {!!data
          ? data.map((element, i) => {
              return (
                <StyledRow key={i}>
                  <StyledTD>
                    <RowFixed style={{ margin: "auto" }}>
                      <Image
                        src={element.img}
                        alt="btc"
                        height="50px"
                        width="50px"
                      />
                      <AutoColumn>
                        <TYPEWHITE style={{ fontSize: "14px" }}>
                          {element.asset}
                        </TYPEWHITE>
                        <RowFixed gap="4px" style={{ margin: "auto" }}>
                          <TYPEGREY style={{ fontSize: "12px" }}>
                            {element.type}
                          </TYPEGREY>
                          <ChainWrapper>
                            <Image
                              src={element.chain.img}
                              alt={element.chain.name}
                              height="10px"
                              width="10px"
                            />
                            <TYPEWHITE style={{ fontSize: "8px" }}>
                              {element.chain.name}
                            </TYPEWHITE>
                          </ChainWrapper>
                        </RowFixed>
                      </AutoColumn>
                    </RowFixed>
                  </StyledTD>

                  <StyledTD>
                    <AutoColumn>
                      <TYPEWHITE style={{ fontSize: "14px" }}>
                        {element.amount} BNB
                      </TYPEWHITE>
                      <TYPEGREY style={{ fontSize: "12px" }}>
                        {element.state}
                      </TYPEGREY>
                    </AutoColumn>
                  </StyledTD>

                  <StyledTD>
                    <TYPEWHITE style={{ fontSize: "14px" }}>
                      {shortenAddress(element.user, 7, element.user.length)}
                    </TYPEWHITE>
                  </StyledTD>

                  <StyledTD>
                    <AutoColumn>
                      <TYPEWHITE style={{ fontSize: "14px" }}>
                        {element.referral_earnings} BNB
                      </TYPEWHITE>
                      <RowFixed gap="5px" style={{ margin: "auto" }}>
                        <TYPEGREY style={{ fontSize: "12px" }}>
                          View on BSC Scan
                        </TYPEGREY>
                        <ExternalLinkIcon height="10px" color="#808191" />
                      </RowFixed>
                    </AutoColumn>
                  </StyledTD>
                </StyledRow>
              );
            })
          : null}
      </tbody>
    </StyledTable>
  );
}

export default Table;
