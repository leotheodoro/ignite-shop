import { Container, Header } from '@/styles/pages/app'
import { globalStyles } from '@/styles/styles'
import type { AppProps } from 'next/app'

globalStyles()

import logoImg from '../assets/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={logoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>

 
  )
}