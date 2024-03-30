import { Container } from './Background.style'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return <Container>{children}</Container>
}