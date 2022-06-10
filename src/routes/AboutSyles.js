import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-43%) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(-50%);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 2px;
  justify-content: center;
`

export const Container = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 80%;

  color: black;

  text-align: justify;
  padding: 30px;
  background: rgba(224, 224, 233, 1);

  border-radius: 10px;
  /* bottom: 100px; */

  animation-name: ${fadeIn};
  animation-duration: .5s;
`

export const Img = styled.img`

`

export const H1 = styled.h1`
  /* display: inline-block; */

  /* background-color: blue; */
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: ${props => props.theme.fonts.main};
  border-radius: 10px;

  color: rgba(9, 182, 245, 1);

`

export const Text = styled.div`
  padding-top: 20px;
`

export const Links = styled.ul`
  list-style-type: none;
  /* margin: 0; */
  padding: 0;
  display: flex;
  width: 400px;
  /* justify-content: center; */
  margin: 0px 0;
  overflow: hidden;
  text-decoration: none;

  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);

  /* border: solid 1px black; */

  padding-bottom: 40px;

  /* border: solid 2px black; */

  & span  {
    /* background: white; */
    padding-left: 60px;
    color: rgba(20, 152, 255, 1);
    font-size: 17px;

    transition-duration: .5s;
  };

  & span:hover  {
    /* background: white; */
    color: blue;
    text-decoration: underline;
    font-size: 18px;
  };

`