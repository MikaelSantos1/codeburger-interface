import React from 'react'

import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarrousel from '../../components/CaterogoryCarrousel'
import OffersCarrousel from '../../components/OffersCarrousel'
import { Container, HomeImage } from './styles'
const Home = () => {
  return (
    <Container>
      <HomeImage src={HomeLogo} alt="home logo" />
      <CategoryCarrousel />
      <OffersCarrousel />
    </Container>
  )
}

export default Home
