import Card from '../components/card/Card';
import { loadDrinks } from '../lib/load-food';

export async function getStaticProps() {
  const drinks = await loadDrinks();

  return { props: { drinks } };
}

export default function Home({ drinks }) {
  return (
    <>
      <div className="card-box">
        {drinks.map((i) => {
          return (
            <Card
              key={i.id}
              title={i.title}
              text={i.text}
              price={i.price}
            />
          );
        })}
      </div>
    </>
  );
}
