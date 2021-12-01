import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import { apiCodeBurger } from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItems,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

const Login = () => {
  const { putUserData } = useUser()
  console.log()
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
  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      apiCodeBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados',
        success: 'Seja bem vindo(a)👌',
        error: 'Verfique seu email e senha🤯'
      }
    )
    putUserData(data)
  }

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

          <Button type="submit" style={{ marginTop: 75, marginBottom: 25 }}>
            Login
          </Button>
          <SignInLink>
            Nao possui conta? <a>Sign up</a>
          </SignInLink>
        </form>
      </ContainerItems>
    </Container>
  )
}

export default Login
