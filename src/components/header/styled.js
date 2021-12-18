import styled from "styled-components";
import { Input } from '@material/react-text-field';

export const HeaderHTML = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.header};
  height: 11vh; 
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 4px;
  width: 100%;
  justify-content: center;
  color: ${({theme: { colors } }) => colors.text};

  button {
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;
    border: 1px solid #ccc;

    &:hover {
      background-color: #225ed8;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;

export const InputHTML = styled(Input)`
  width: 600px;
`;