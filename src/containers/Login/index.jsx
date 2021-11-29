import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  Button,
  SignInLink,
  ErrorMessage
} from './styles'

const Login = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email valido')
      .required('O campo de Email é obrigatorio'),
    password: Yup.string()
      .min(6, 'A senha deve ter no minimo 6 digitos')
      .required('A senha é obrigatoria')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => console.log(data)

  return (
    <Container>
      <LoginImage alt="image" src={LoginImg} />
      <ContainerItems>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="logo" />
          <h1>Login</h1>

          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Login</Button>
          <SignInLink>
            Nao possui conta? <a>Sign up</a>
          </SignInLink>
        </form>
      </ContainerItems>
    </Container>
  )
}

export default Login
