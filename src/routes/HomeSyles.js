import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Container = styled.div`
  /* display: inline-block; */
  opacity: 1;
  width: 600px;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateY(-7%) translateX(-50%);
  /* overflow: hidden; */

  text-align: center;
  background-color: #e0e0e9;
  border-radius: 10px;
  bottom: 1px;

  animation-name: ${fadeIn};
  animation-duration: 2s;
`

export const Img = styled.img`
  transform: scale(.9) rotate(180deg);

  transition-duration: 2s;
  ${Container}:hover & {
    transform: scale(1) rotate(0deg);
  }
`

export const H1 = styled.h1`
  /* display: inline-block; */

  /* background-color: blue; */
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
  /* margin: 0; */
  padding: 0;
  display: flex;
  width: 376px;
  /* justify-content: center; */
  margin: 0px 0;
  overflow: hidden;
  text-decoration: none;

  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);

  /* border: solid 1px black; */

  padding-bottom: 40px;

  & span  {
    /* background: white; */
    padding-left: 60px;
    color: #0000f8;
    font-size: 17px;

    transition-duration: .5s;
  };

  & span:hover  {
    /* background: white; */
    color: purple;
    text-decoration: underline;
    font-size: 18px;
  };

`