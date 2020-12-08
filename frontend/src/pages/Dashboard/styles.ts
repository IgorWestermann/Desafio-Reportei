import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  .banner {
    height: 100%;
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
    max-width: 480px;
    background: #f9f8f8;
    border-radius: 0px 3px 3px 0px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    padding: 24px 16px 16px 16px;
  }
  .main-content {
    max-width: 1080px;
    width: 100%;
    min-height: 60vh;
    background: #f9f8f8;
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
    padding: 24px 16px 24px 16px;
    margin: 0 24px;

    p {
      padding-bottom: 16px;
    }

    img {
      width: 256px;
      border-radius: 10px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5),
        0 3px 50px 0 rgba(0, 0, 0, 0.1);
    }
    .img-col {
      img {
        margin-bottom: 16px;
      }
      p {
        align-items: center;
        margin-left: 8px;
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      
      button {
        background-color: #0facf3;
        height: 48px;
        color: #ffffff;
        border-radius: 5px;
        border-color: #0facf3;
        border: 0;
        transition: background-color 0.2s;
        font-size: 20px;
        padding: 10px;
        
        &:hover {
          background: ${shade(0.1, "#0facf3")};
        }       
        svg {
          margin-right: 8px;
        }

      }
    }



    }
    .row {
      display: flex;
    }
    .column {
      padding: 0 16px;
    }
    .column + .column {
      padding-top: 16px;
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a + a {
        margin-left: 48px;
      }
    }
    .content-icons {
      display: flex;
      /* align-items: center; */
      justify-content: flex-start;

      ul {
        margin-left: 0px;
        display: flex;
        list-style: none;
        margin-top: 20px;
        div {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        li {
          & + li {
            margin-left: 16px;
          }
          strong {
            display: block;
            font-size: 18px;
            margin-right: 8px;

            color: #3d3d3d;
          }
        }
      }
    }
  }
`;

export const Favorites = styled.div`
  margin-top: 8px;
  max-width: 480px;
  min-width: 420px;

  .siderBar-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;

    svg {
      font-size: 24px;
      margin-bottom: 12px;
    }
  }
  .side-title {
    margin-top: 0;
    margin-bottom: 16px;
    font-size: 24px;
  }
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 16px;
    display: block;
    text-decoration: none;
    margin-top: 8px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    transition: transform 0.1s;

    &:hover {
      background: ${shade(0.1, "#E7ECEF")};
      transform: translateX(6px);
    }
  }
  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  div {
    margin-left: 8px;
    font-size: 12px;
    color: #1f1f1f;
  }
  p {
    margin-top: 2px;
  }
  svg {
    margin-left: auto;
    color: #3d3d4d;
  }
`;

export const Title = styled.h1`
  margin-top: 56px;
  font-size: 48px;
  color: #2b2b2b;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 24px;
  margin-bottom: 32px;
  max-width: 860px;
  min-width: 530px;

  input {
    background: #f5f5f5;
    flex: 1;
    height: 48px;
    border-radius: 5px 0 0 5px;
    border: 0;
    padding: 10px;
    font-size: 18px;
  }
  button {
    /* width: 100%; */
    background-color: #0facf3;
    height: 48px;
    color: #ffffff;
    border-radius: 0 5px 5px 0;
    border-color: #0facf3;
    border: 0;
    transition: background-color 0.2s;
    font-size: 20px;
    padding: 10px;

    &:hover {
      background: ${shade(0.1, "#0facf3")};
    }
  }
`;

export const Main = styled.main`
  display: block;
  align-items: center;
  /* margin-left: 320px; */

  .content {
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  a {
    padding-bottom: 24px;
    & + a {
      margin-left: 48px;
    }
  }

  svg {
    margin-right: 8px;
  }
  p {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;
