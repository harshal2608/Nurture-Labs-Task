import styled from "styled-components";

// ROWS
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RowBetween = styled(Row)<{ gap?: string }>`
  justify-content: space-between;
  gap: ${({ gap }) => gap};
`;
export const RowAround = styled(Row)<{ gap?: string }>`
  justify-content: space-around;
  gap: ${({ gap }) => gap};
`;

export const RowFixed = styled(Row)<{ gap?: string }>`
  width: fit-content;
  justify-content: center;
  gap: ${({ gap }) => gap};
`;

export const AutoRow = styled(Row)<{ gap?: string }>`
  width: 100%;
  gap: ${({ gap }) => gap};
  justify-content: flex-start;
`;

//Columns
const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AutoColumn = styled(Column)<{ gap?: string }>`
  gap: ${({ gap }) => gap};

  justify-content: flex-start;
`;

export const ColumnBetween = styled(Column)`
  justify-content: space-between;
  height: 100%;
`;

//Buttons
export const Button = styled.button`
  background-color: ${({ theme }) => theme.white};
  border: none;
  width: 90px;
  padding: 4px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.75rem;
  font-family: ${({ theme }) => theme.fontFamilyInter};
`;

export const BlueButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.darkBlue};
  color: ${({ theme }) => theme.white};
  gap: 5px;
  width: fit-content;
  padding: 8px 16px;
  font-size: 0.875rem;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
export const CancelButton = styled(BlueButton)`
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid #242731;
  width: auto;
`;

//Icons
export const IconWrapper = styled.div`
  height: 1.25rem;
  width: 1.25rem;
`;

export const Tier = styled.div`
  background-color: ${({ theme }) => theme.lightBlue};
  color: ${({ theme }) => theme.darkBlue};
  font-weight: bold;
  font-size: 0.75rem;
  padding: 4px 1rem;
  border-radius: 5px;
`;
