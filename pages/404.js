import { ErrorMessage } from '@/components/errorMessage'

export default function custom404() {
  return (
    <ErrorMessage
      code={404}
      title='Oh Oh, page não encontrada.'
      description='Está página não existe.'
    />
  )
}