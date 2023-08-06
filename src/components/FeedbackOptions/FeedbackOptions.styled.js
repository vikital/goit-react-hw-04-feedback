import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px 10px;
  margin-right: 8px;
  font-size: 16px;
  border: none;
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    background-color: #7f8999;
    box-shadow: -2px 1px 7px 0px rgba(48, 38, 38, 0.75);
    -webkit-box-shadow: -2px 1px 7px 0px rgba(48, 38, 38, 0.75);
    -moz-box-shadow: -2px 1px 7px 0px rgba(48, 38, 38, 0.75);
  }
`;
