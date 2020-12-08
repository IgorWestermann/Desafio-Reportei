import { shade } from "polished";
import styled from "styled-components";

export const Body = styled.header`
  background: #f9f8f8;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  max-width: 1380px;
  margin: 0 auto;
  padding: 32px ;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 50px 0 rgba(0, 0, 0, 0.1);
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8a8;
    transition: 0.1s;

    &:hover {
      color: ${shade(0.1, "#a8a8a8")};
      transform: translateX(-8px);
    }
  }

  svg {
    margin-right: 8px;
  }
`;

export const Details = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
  max-width: 1380px;
  margin: 0 auto;
  padding: 24px 0px;

  header {
    display: flex;
    align-items: flex-start;

    img {
      width: 240px;
      height: 240px;
      border-radius: 10px;
    }
    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d3d;
      }
      h2 {
        margin-left: 56px;
      }
      p {
        margin-left: 56px;
        font-size: 18px;
        color: #6d6d6d;
        margin-top: 4px;
      }
      ul {
        margin-left: 32px;
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
            margin-left: 56px;
          }
          strong {
            display: block;
            font-size: 36px;
            margin-right: 8px;

            color: #3d3d3d;
          }
        }
      }
    }
  }
`;

export const Main = styled.main`
  display: block;
  align-items: center;
  margin-left: 320px;

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
    font-size: 20px;
    margin-bottom: 16px;
  }
`;
