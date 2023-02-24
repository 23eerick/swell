import Link from 'next/link'
import { Section, Container, Title, Description } from './error.style'

export function ErrorMessage({ title, description }) {

  return (
    <Section>
      <Container>
        <Title>
          {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Link href='/' style={{ color: '#ff5c00', fontSize: '20px' }}>
          Voltar ao inicio
        </Link>
      </Container>
    </Section>
  )
}