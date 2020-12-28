import styled from 'styled-components';
import { shade } from 'polished';

import main_background from '../../assets/main_background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  background: url(${main_background}) no-repeat center;
`;

export const Content = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 50%;
  border-radius: 15px 15px 15px 15px;

  margin-left: 25%;
  margin-top: 5%;

  #logo {
    position: absolute;
    top: 14%;
    left: 26%;
  }

  #img_user {
    margin-top: 50px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    margin-top: 50px;
  }

  #icon_padding {
    margin-right: 20px;
  }

  #input_css {
    display: flex;
    margin-top: 20px;
  }

  input {
    width: 550px;
    border-radius: 24px;
    border: 1px solid #848484;
    text-indent: 20px;

    & + input {
      margin-top: 20px;
    }
  }

  #link_forgot {
    margin-top: 20px;
    margin-left: 60%;

    a {
      color: #001847;
      text-align: right;
      text-decoration: none;
      transition: color 0.2s;

      margin-top: 30px;

      &:hover {
        color: ${shade(0.2, '#001847')};
      }
    }
  }

  button {
    background: #52e218;
    border-radius: 24px;
    border: none;
    color: #fff;
    width: 176px;
    height: 48px;
    font-weight: 700;
    margin-top: 20px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#52e218')};
    }
  }
`;
