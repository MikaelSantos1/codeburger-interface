import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import Button from '../../components/Button'
import { apiCodeBurger } from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItems,
  Label,
  Input,
  SignInLink,
  ErrorMessage
} from './styles'

const Register = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required('O seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um email valido')
      .required('O campo de Email é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter no minimo 6 digitos')
      .required('A senha é obrigatório'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
      .required('A senha é obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await apiCodeBurger.post(
        'users',
        {
          email: clientData.email,
          name: clientData.name,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro realizado com sucesso!')
      } else if (status === 409) {
        toast.error('Email ja cadastrado')
      } else {
        throw new Error()
      }
    } catch (e) {
      toast.error('Falhe no sistema, tente novamente')
    }
  }

  return (
    <Container>
      <RegisterImage alt="image" src={RegisterImg} />
      <ContainerItems>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <img src={Logo} alt="logo" />
          <h1>Cadastra-se</h1>

          <Label error={errors.name?.message}>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar senha</Label>
          <Input
            type="password"
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Login
          </Button>
          <SignInLink>
            Ja possui conta? <a>Sign up</a>
          </SignInLink>
        </form>
      </ContainerItems>
    </Container>
  )
}

export default Register
