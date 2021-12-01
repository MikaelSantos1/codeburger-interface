import styled from 'styled-components'

import Background from '../../assets/background.svg'
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('${Background}');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  form {
    display: flex;
    flex-direction: column;
  }
`

export const RegisterImage = styled.img`
  height: 70%;
`

export const ContainerItems = styled.div`
  background: #373737;
  border-radius: 0 10px 10px 0;
  height: 70%;
  padding: 25px 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
  }
`

export const Label = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-top: ${props => (props.error ? '10px' : '28px')};
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 391.42px;
  height: 38.32px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  border: ${props => (props.error ? '2px solid  #CC1717;' : 'none')};
  padding-left: 10px;
`

export const SignInLink = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  a {
    cursor: pointer;
    text-decoration: underline;
  }
`
export const ErrorMessage = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-top: 2px;
  color: #cc1717;
`
