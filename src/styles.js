import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  background: #333;
  min-width: 100vw;
  min-height: 100vh;
  padding-bottom: 30px;

  ul {
    width: 90%;
    list-style: none;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 25px;
    margin-top: 30px;

    li {
      background: #eee;
      border-radius: 6px;
      padding: 30px;
      cursor: pointer;
      transition: 0.2s;
      display: flex;

      &:hover {
        background: ${darken(0.1, "#eee")};

        div {
          img {
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 50%;
          }

          strong {
          }

          span {
          }
        }
      }

      div {
        width: 38%;
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        border-right: 1px solid rgba(0, 0, 0, 0.2);

        img {
          height: 100px;
          margin-bottom: 10px;
        }

        strong {
          font-size: 22px;
          margin-bottom: 10px;
          transition: 0.2s;
        }

        span {
          color: rgba(0, 0, 0, 0.4);
          transition: 0.2s;
        }
      }

      div + div {
        width: 62%;
        display: flex;
        padding: 0 20px;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        border-right: none;
        border-left: 1px solid rgba(0, 0, 0, 0.2);

        span ~ p {
          margin-top: 20px;
        }

        p {
          align-self: flex-start;

          strong {
            font-size: 16px;
            margin-bottom: 10px;
            transition: 0.2s;
          }

          span {
            font-size: 16px;
            color: rgba(0, 0, 0, 0.7);
          }
      }
    }
  }
`;

export const NavBar = styled.div`
  height: 60px;
  background: #3e3e3e;
  padding: 10px 150px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #fff;
  }

  form {
    display: flex;
    align-items: center;

    select {
      width: 500px;
      height: 40px;
      border-radius: 4px;
      background: #e3e3e3;
      margin-right: 10px;
      padding: 5px 10px;
    }

    button {
      height: 40px;
      border-radius: 4px;
      background: transparent;
      padding: 5px 20px;
      color: #fff;
      border: none;
    }
  }
`;
