import styled from "@emotion/styled";

export const ProfileWrapper = styled.div`
 width: 360px;
  height: 460px;
  background-color: #d6d1d1;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
      display: block;
  border-radius: 50%;
  background-color: #8c8c8c;
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

export const Name = styled.p`
font-weight: 700;
  color: #000;
  text-align: center;
  font-size: 24px;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const Tag = styled.p`
    margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

export const Location = styled.p`
    margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
  color: #666666;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  border-top: 2px solid #e0e0e0;
  margin-top: 30px;

  li:not(:first-of-type) {
    border-left: 2px solid #e0e0e0;
    margin: 0 auto;
  }
`;

export const StatsItem = styled.li`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #666666;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #000;
`;