import React from 'react';

import he_logo from '../../assets/he_logo.svg';
import login_img from '../../assets/login_img.png';
import icon_user from '../../assets/icon_user.png';
import icon_pass from '../../assets/icon_pass.png';

import { Container, Content } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img id="logo" src={he_logo} alt="HE_Controles" />

      <div id="img_user">
        <img src={login_img} alt="photo_user" />
      </div>

      <form>
        <div id="input_css">
          <img id="icon_padding" src={icon_user} alt="icon_input_user" />
          <input placeholder="Usuário" />
        </div>
        <div id="input_css">
          <img id="icon_padding" src={icon_pass} alt="icon_input_password" />
          <input type="password" placeholder="Senha" />
        </div>
      </form>

      <div id="link_forgot">
        <a href="forgot">Esqueceu sua senha?</a>
      </div>

      <button type="submit">ENTRAR</button>
    </Content>
  </Container>
);

export default SignIn;
