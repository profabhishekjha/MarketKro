import { faker } from '@faker-js/faker'
import Card from '../../components/Card/Card'

const Favorite = () => {
  function CardList() {
    const cards = []
    for (let i = 0; i < 10; i++) {
      cards.push(
        <Card
          id={i}
          heading={faker.commerce.product()}
          companyName={faker.company.buzzVerb()}
          description={faker.commerce.productDescription()}
          image={faker.image.url()}
          price={faker.commerce.price()}
          rating={faker.number.float({ min: 1, max: 5, precision: 0.1 })}
          reviews={faker.number.int({ max: 10000 })}
          isFavoriteState={true}
        />
      )
    }
    return cards
  }
  const cards = CardList()
  return (
    <main
      className=" mt-10 grid grid-cols-4 items-center justify-center gap-10 px-32 max-lg:px-10 max-md:grid-cols-2 max-sm:grid-cols-1"
      key={cards}>
      {cards}
    </main>
  )
}

export default Favorite
