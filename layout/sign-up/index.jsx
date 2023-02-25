import React from 'react'
import * as yup from 'yup'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Section, Container, Title, Box, Text, Form, P, Label, TextLabel, Input, Button, TextButton } from './signup.style'

const schema = yup.object({
  email:
    yup.string()
      .email()
      .required('O email é obrigatório'),
  senha:
    yup.string()
      .min(6, 'Insira 6 caracteres')
      .required('O password é obrigatório'),
  confirmSenha:
    yup.string()
      .required('confirmar senha')
      .oneOf([yup.ref('senha')],
        'Senha inválida')
})

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  function onSubmit(userData) {
    console.log(userData)
  }

  return (
    <Section>
      <Container>
        <Title>Cadastro</Title>
        <Box>
          <Link href='/sign-in' style={{ color: '#ff5c00' }}>
            ←Login
          </Link>
          <Text>Swell</Text>
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            <TextLabel>Email</TextLabel>
            <Input
              id='email'
              type='email'
              {...register('email', { required: true })}
              placeholder={'Digite seu email'} />
            {errors.email &&
              <P>
                {errors.email?.message}
              </P>
            }
          </Label>
          <Label>
            <TextLabel>Senha</TextLabel>
            <Input
              id='password'
              type='password'
              {...register('senha', { required: true })}
              placeholder={'Digite sua senha'} />
            {errors.senha &&
              <P>
                {errors.senha?.message}
              </P>
            }
          </Label>
          <Label>
            <TextLabel>Confirmar senha</TextLabel>
            <Input
              id='confirmPassword'
              type='password'
              {...register('confirmSenha', { required: true })}
              placeholder={'Confirme sua senha'} />
            {errors.confirmSenha &&
              <P>
                {errors.confirmSenha?.message}
              </P>
            }
          </Label>
          <Button type='submit'>
            <TextButton>Cadastrar-se</TextButton>
          </Button>
        </Form>
      </Container>
    </Section >
  )
}
