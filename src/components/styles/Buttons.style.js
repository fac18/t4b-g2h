import styled from "styled-components";

const PrimaryBtn = styled.button`
  width: 183px;
  height: 54px;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #2c5e4d;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryBtn = styled.button`
  width: 183px;
  height: 54px;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #eb5a61;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryBtnS = styled.button`
  width: 80px;
  height: 30px;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #2c5e4d;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryBtnS = styled.button`
  width: 80px;
  height: 30px;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #eb5a61;
  color: #ffffff;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const WarningBtnL = styled.button`
  width: 130px;
  height: 25px;
  background-color: #d97f28;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const EditBtn = styled.button`
  width: 50px;
  height: 24px;
  background-color: #d97f28;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const DangerBtn = styled.button`
  width: 50px;
  height: 24px;
  background-color: #d5332c;
  margin: 0.3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export {
  PrimaryBtn,
  SecondaryBtn,
  PrimaryBtnS,
  SecondaryBtnS,
  WarningBtnL,
  DangerBtn,
  EditBtn
};
