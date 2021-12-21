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

    &:hover {
      background-color: #6200ee;
    }

    span {
      font-weight: bold;
    }
  }
`;

export const InputHTML = styled(Input)`

  .mdc-text-field__input {
    color: white;
  }
`;
