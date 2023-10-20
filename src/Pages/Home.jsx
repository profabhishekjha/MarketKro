import { faker } from '@faker-js/faker'
import Card from '../components/Card/Card'
import Section from '../components/Section'
import Adv from '../components/Adv'
import BannerCarousel from '../components/Carousel/BannerCarousel'
export default function Home() {
  const images = [
    '/Images/Nature2.jpeg',
    '/Images/Nature1.avif',
    '/Images/Nature3.avif',
    '/Images/Nature4.avif'
  ]
  function CardList() {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(
        <Card
          id={i}
          heading={faker.commerce.productName()}
          description={faker.commerce.productDescription()}
          companyName={faker.company.buzzVerb()}
          image={faker.image.url()}
          price={faker.commerce.price()}
          rating={faker.number.float({ min: 1, max: 5, precision: 0.1 })}
          reviews={faker.number.int({ max: 10000 })}
        />
      )
    }
    return cards
  }
  const cards = CardList()
  return (
    <main className="mx-10 my-5 flex flex-col gap-16 max-sm:mx-2">
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

      {/*       <Adv isAdvLeft={true}>
        <BannerCarousel customClasses="w-[30vw]" images={images} />
        <Section
          FirstHeading="Diwali Special Products"
          SecondHeading="50% Discount"
          cards={cards}
          isCardCarousel={false}
          cardCarouselCustomClasses={`w-[63vw] `}
        />
      </Adv> */}
      <Section
        FirstHeading="Electronics Products"
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
      {/*       <Adv isAdvLeft={false}>
        <BannerCarousel customClasses="w-[30vw]" images={images} />
        <Section
          FirstHeading="Diwali Special Products"
          SecondHeading="50% Discount"
          cards={cards}
          isCardCarousel={false}
          cardCarouselCustomClasses={`w-[63vw] `}
        />
      </Adv> */}
      <Section
        FirstHeading="Electronics Products"
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
    </main>
  )
}
