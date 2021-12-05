import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/ofertas.png'
import api from '../../services/api'
import stringToMonetary from '../../utils/formatCurrency'
import {
  Container,
  ContainerItems,
  CategoryImage,
  Image,
  Button
} from './styles'

const OffersCarrousel = () => {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')
      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, formatedPrice: stringToMonetary(product.price) }
        })
      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]
  return (
    <Container>
      <CategoryImage src={Offers} alt="home logo" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(offer => (
            <ContainerItems key={offer.id}>
              <Image src={offer.url} alt="foto da categoria" />
              <p>{offer.name}</p>
              <p>{offer.formatedPrice}</p>
              <Button>Peça agora</Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}

export default OffersCarrousel
