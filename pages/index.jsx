import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  `

const Container = styled.div`
  width: 100%;
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1024px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media(max-width: 768px) {
    flex-direction: column;
  }
  `

const Div = styled.div`
  @media(max-width: 768px) {
    padding: 20px;
    border-radius: 5px;
    border: 1px solid rgba(153, 153, 153, 0.1);
  }
  `

const Title = styled.h1`
  color: #555555;
  font-size: 80px;

  @media(max-width: 768px) {
    font-size: 50px;
  }
  `

const Text = styled.p`
  color: #888888;
  font-size: 40px;

  @media(max-width: 758px) {
    font-size: 20px;
  }
  `

const Button = styled.button`
  width: 160px;
  height: 40px;
  border: none;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #ff5c00;
  
  @media(max-width: 758px) {
    width: 100px;
  }
  `

const DivImage = styled.div`
  @media(max-width: 768px) {
    display: none;
  }
  `

export default function Home() {

  return (
    <Section>
      <Container>
        <Div>
          <Title>
            Swell
          </Title>
          <Text>
            Registre seu produto e gerencie <br /> seu estoque.
          </Text>
          <Button>
            <Link href='/login' style={{ textDecoration: 'none', background: 'none', fontSize: '20px', color: '#fff' }}>
              Entrar
            </Link>
          </Button>
        </Div>
        <DivImage>
          <Image width={500} height={500} src='/image.svg' alt='image' />
        </DivImage>
      </Container>
    </Section>
  )
}