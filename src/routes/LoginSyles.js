import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0%) translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(-7%) translateX(-50%);
  }
`

export const Container = styled.div`
  /* display: inline-block; */
  opacity: 1;
  width: 420px;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translateY(-7%) translateX(-50%);
  overflow: hidden;

  color: #FAF9F6;

  text-align: left;
  padding: 30px;
  background: ${'linear-gradient(121.57deg, rgba(179, 42, 244, 0.9) 18.77%, rgba(145, 108, 244, 0.9) 60.15%)'};

  border-radius: 10px;
  bottom: 1px;

  animation-name: ${fadeIn};
  animation-duration: .5s;
`

export const Img = styled.img`
  width: 200px;
  margin: 1px 27.5%;
`

export const H1 = styled.h1`
  /* display: inline-block; */

  /* background-color: blue; */
  text-align: center;
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: ${props => props.theme.fonts.main};
  border-radius: 10px;

  color: white;

`

export const Text = styled.div`
  padding-top: 20px;
`
export const Form = styled.ul`
  list-style-type: none;
  padding: 0px 0;
  row-gap: ;
  /* display: flex; */
  width: 400px;
  justify-content: left;
  margin: 0px auto;
  text-decoration: none;


  /* border: solid 1px black; */

  padding-bottom:5px;

  & p {
    margin-bottom: 0;
  }

  & li {
    margin-bottom: 10px;

    & input {
      width: 98%;
      height: 30px;
      font-size: 16px;
      border-radius: 10px;
      background: #e0F9FF;
      border: solid 1px black;
      margin: 0px;
      padding: 0;
      padding-left: 10px;
    }
  }

  /* border: solid 2px black; */

  & span  {
    /* background: white; */
    /* padding-left: 0px; */
    color: white;
    font-size: 17px;

    transition-duration: .5s;
  };

`

export const Button = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 10px;
  border: solid 1px black;
  background: ${'linear-gradient(121.57deg, rgba(109, 0, 204, 1) 18.77%, rgba(109, 0, 104, .9) 60.15%)'};
  font-size: 24px;
  color: whitesmoke;
  cursor: pointer;

  transition-duration: .5s;
  &:hover {
    background: ${'linear-gradient(121.57deg, rgba(149, 40, 244, 1) 18.77%, rgba(149, 40, 144, .9) 60.15%)'};
    transform: scale(1.02);
  }
  /* margin: 20px auto; */
`

export const ButtonContainer = styled.div`
  width: 250px;
  margin: 30px auto;
`

export const Select = styled.select`
  /* width: 100%; */
  height: 30px;
  background: rgba(179, 42, 244, 0.9);
  border-radius: 10px;
  color: lightgray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  cursor: pointer;

  transition-duration: .5s;

  & option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:hover {
    background: rgba(199, 72, 255, 0.9);
    transform: scale(1.01);
  }
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
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);

  /* border: solid 1px black; */

  padding-bottom: 40px;

  /* border: solid 2px black; */

  & span  {
    /* background: white; */
    padding-left: 60px;
    color: #b7e7f7;
    font-size: 17px;

    transition-duration: .5s;
  };

  & span:hover  {
    /* background: white; */
    color: #f0a0f0;
    text-decoration: underline;
    font-size: 18px;
  };

`