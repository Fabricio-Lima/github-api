import React, { useState } from "react";
import * as S from "./styled";
import TextField from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import { HeaderHTML, InputHTML } from "./styled";
import useGithub from "../../hooks/github-hooks";

import { Input } from '@material/react-text-field';


const Header = () => {
  const { getUser } = useGithub();
  const [ usernameForSearch, setUsernameForSearch ] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <HeaderHTML>
      <S.Wrapper>
      <TextField
        label='Pesquisar Usuários'
        outlined
        trailingIcon={<MaterialIcon role="button" icon="search"/>}
        color="white"
        >
        <Input
          value={usernameForSearch}
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
      </TextField>
        <button
          type="submit"
          onClick={submitGetUser}
        >
          <span>
            Buscar
          </span>
        </button>
      </S.Wrapper>
    </HeaderHTML>
  );
};

export default Header;
