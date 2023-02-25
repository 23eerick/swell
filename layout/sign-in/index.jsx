import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Section, Container, Title, Box, Text, Form, Label, TextLabel, Input, Span, Button, TextButton, DivLink } from './signin.style'

export function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  function onSubmit(userData) {
    console.log(userData)
  }

  return (
    <Section>
      <Container>
        <Title>Login</Title>
        <Box>
          <Link href='/' style={{ color: '#ff5c00' }}>
            ←Voltar
          </Link>
          <Text>Swell</Text>
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.email && errors.senha && <Span>Estes campos são obrigatórios!</Span>}
          <Label>
            <TextLabel>Email</TextLabel>
            <Input
              id='email'
              type='email'
              {...register('email', { required: true })}
              placeholder={'Digite seu email'} />
          </Label>
          <Label>
            <TextLabel>Senha</TextLabel>
            <Input
              id='password'
              type='password'
              {...register('senha', { required: true })}
              placeholder={'Digite sua senha'}
            />
          </Label>
          <Button type='submit'>
            <TextButton>Entrar</TextButton>
          </Button>
        </Form>
        <DivLink>
          <Link href='/sign-up' style={{ color: '#ff5c00' }}>
            Cadastre-se
          </Link>
        </DivLink>
      </Container>
    </Section>
  )
}
