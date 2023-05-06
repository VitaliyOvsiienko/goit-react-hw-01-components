import styled from "@emotion/styled";

export const StyleTable = styled.table`
  border-collapse: collapse;
  width: 40%;
  margin-top: 40px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledTableHeader = styled.th`
     background-color: rgb(32, 154, 241);
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  border-right: 1px solid #fff;

  &:last-child {
    border-right: none;
  }
`;

export const StyledTableData = styled.td`
    border-bottom: 1px solid #fff;
  color: #000;
  font-size: 14px;
  padding: 10px;
  text-align: center;
`;

export const StyledTableRow = styled.tr`
    &.item:nth-child(even) {
    background-color: #d6d1d1;
  }
`;
