import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Section, Container, Title, Box, Text, Form, Span, Label, TextLabel, Input, Button, TextButton } from './signup.style'

export function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

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
              placeholder={'Digite sua senha'} />
          </Label>
          <Button type='submit'>
            <TextButton>Cadastrar-se</TextButton>
          </Button>
        </Form>
      </Container>
    </Section >
  )
}
