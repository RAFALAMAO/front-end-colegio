import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(7%) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0%) translateX(-50%);
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 2px;
  justify-content: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const Container = styled.div`
  margin: 0;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;

  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;

  color: whitesmoke;

  text-align: justify;
  padding: 30px;
  padding-bottom: 60px;
  background: rgba(224, 224, 233, 1);
  background: ${'linear-gradient(121.57deg, #24005e 18.77%, rgba(81, 0, 94, 0.98) 60.15%)'};

  border-radius: 10px;

  animation-name: ${fadeIn};
  animation-duration: .5s;

  @media ${(props) => props.theme.breakpoints.sm} {
    top: 10px;
    width: 80%;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: solid 1px black;

  & th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }

  & td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
`

export const H1 = styled.h1`
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
  padding: 0;
  display: flex;
  width: 400px;
  margin: 0px 0;
  overflow: hidden;
  text-decoration: none;

  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);

  padding-bottom: 40px;
  padding-left: 60px;

  & span  {
    padding: 30px;
    color: rgba(20, 152, 255, 1);
    font-size: 17px;

    transition-duration: .5s;
  };

  & span:hover  {
    color: blue;
    text-decoration: underline;
    font-size: 18px;
  };

  @media ${(props) => props.theme.breakpoints.sm} {
    & span  {
      font-size: 15px;
    };

    & span:hover  {
      font-size: 16px;
    };
  }
`