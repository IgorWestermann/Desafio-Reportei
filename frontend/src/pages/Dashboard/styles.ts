import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  div.banner {
    height: 72px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      padding-bottom: 24px;
    }

  }
  div.wrapper-content {
    display: flex;
  }
  aside.sideBar {
    max-width: 260px;
    background: #fff;
    border-radius: 0px 3px 3px 0px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    height: 80vh;
    padding: 24px 16px 16px 16px;
    margin-top: 24px;
  }
  .main-content {
    max-width: 960px;
    width: 100%;
    background: #fff;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    height: 80vh;
    padding: 24px 16px 24px 16px;
    margin: 24px;

    p {
      padding-bottom: 16px;
    }

    img {
      width:156px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    }
    .saveButton {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .row, .icons {
      display: flex;
    }
    .column {
      padding: 0 16px;
    }
    .column + .column {
      padding-top: 16px;
    }
    .content {
      padding-top: 56px;
      display: block;
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2b2b2b;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 16px;
  margin-bottom: 16px;
  max-width: 400px;

  input {
    flex: 1;
    height: 32px;
    border-radius: 5px 0 0 5px;
    border: 0;
    padding: 10px;
  }
  button {
    width: 80px;
    background-color: #0facf3;
    height: 32px;
    color: #ffffff;
    border-radius: 0 5px 5px 0;
    border-color: #0facf3;
    border: 0;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.1, "#0facf3")};
    }
  }
`;
