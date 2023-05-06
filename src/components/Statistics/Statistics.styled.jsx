import styled from "@emotion/styled";

export const Statistic = styled.section`
width: 360px;
  height: 200px;
  background-color: #d6d1d1;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
  0px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Title = styled.h2`
    color: #000;
  font-size: 36px;
  margin-bottom: 10px;
  margin-bottom: auto;
`;

export const StatList = styled.ul`
     list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.span`
    color: whitesmoke;
  font-size: 16px;
  margin-top: 30px;
`;

export const Percentage = styled.span`
     color: whitesmoke;
  font-size: 26px;
  font-weight: bold;
`;