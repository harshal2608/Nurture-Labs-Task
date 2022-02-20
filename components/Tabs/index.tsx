import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Table from "../Table";
import { tableData } from "../../pages";

const StyledTabsList = styled(TabList)`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  padding: 0;
  color: ${({ theme }) => theme.textColor};
`;

const StyledTab = styled(Tab)`
  padding-bottom: 4px;
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
  &.selected-tab {
    border-bottom: 2px solid ${({ theme }) => theme.darkBlue};
    color: ${({ theme }) => theme.white};
  }
`;

function TabsList({ data }: { data: tableData }) {
  return (
    <Tabs selectedTabClassName="react-tabs__tab--selected selected-tab">
      <StyledTabsList>
        <StyledTab>First Tab</StyledTab>
        <StyledTab>Second Tab</StyledTab>
      </StyledTabsList>

      <TabPanel>
        <Table data={data} />
      </TabPanel>
      <TabPanel>
        <h2>Nothing To See Here, Sorry!!</h2>
      </TabPanel>
    </Tabs>
  );
}

export default TabsList;
