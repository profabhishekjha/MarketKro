import { faker } from '@faker-js/faker'
import Card from '../components/Card/Card'
import Section from '../components/Section'
import Adv from '../components/Adv'
import BannerCarousel from '../components/Carousel/BannerCarousel'
export default function Home() {
  const images = [
    '/Images/Nature1.webp',
    '/Images/Nature2.webp',
    '/Images/Nature3.webp',
    '/Images/Nature4.webp',
    '/Images/Nature5.webp'
  ]
  function CardList() {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(<Card id={i} heading={faker.commerce.productName()} image={faker.image.url()} />)
    }
    return cards
  }
  const cards = CardList()
  return (
    <main className=" mx-10 my-5 flex flex-col gap-8 max-sm:mx-2">
      <BannerCarousel images={images} />
      <Section
        FirstHeading="Womans Products"
        SecondHeading="Beauty Deals"
        cards={cards}
        isCardCarousel={true}
      />
      <Section
        FirstHeading="Men's Products"
        SecondHeading="Best Deals"
        cards={cards}
        isCardCarousel={true}
      />
      <Section
        FirstHeading="Children Products"
        SecondHeading="Toys"
        cards={cards}
        isCardCarousel={true}
      />
      <Section
        FirstHeading="Electronics Products"
        SecondHeading="Best Deals"
        cards={cards}
        isCardCarousel={true}
      />
    </main>
  )
}
