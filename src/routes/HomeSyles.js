import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Container = styled.div`
  width: 600px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);

  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;

  text-align: center;
  background-color: #e0e0e9;
  border-radius: 10px;
  height: 725px;

  animation-name: ${fadeIn};
  animation-duration: 1s;

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 10px;
    width: 95%;
    height: 548px;

    & h1 {
      font-size: 28px;
    }

    & img {
      width: 90%;
    }
  }
`

export const Img = styled.img`
  transform: scale(.9) rotate(180deg);
  transition-duration: 2s;

  ${Container}:hover & {
    transform: scale(1) rotate(0deg);
  }
`

export const H1 = styled.h1`
  padding-top: 28px;
  padding-bottom: 10px;
  font-family: ${props => props.theme.fonts.main};
  border-radius: 10px;

  transition-duration: 1s;
  transform: translateY(40px);

  ${Container}:hover & {
    transform: translateY(0px);
  }
`

export const Links = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  width: 376px;
  margin: 0px 0;
  overflow: hidden;
  text-decoration: none;

  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);

  padding-bottom: 40px;

  & span  {
    padding-left: 60px;
    color: #0000f8;
    font-size: 17px;

    transition-duration: .5s;
  };

  & span:hover  {
    color: purple;
    text-decoration: underline;
    font-size: 18px;
  };

  @media ${(props) => props.theme.breakpoints.sm} {
    padding-left: 60px;
    & span  {
      padding: 30px;
      font-size: 15px;
    };

    & span:hover  {
      font-size: 16px;
    };
  }
`