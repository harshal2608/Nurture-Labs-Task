import styled from "styled-components";

const TYPE = styled.p`
  font-family: ${({ theme }) => theme.fontFamilyPoppins};
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  margin: 0;
`;
export const TYPEHEADER = styled(TYPE)`
  font-size: 1.5rem;
`;
export const TYPEWHITE = styled(TYPE)`
  font-weight: 400;
`;
export const TYPEGREY = styled(TYPE)`
  color: ${({ theme }) => theme.textColor};
`;
