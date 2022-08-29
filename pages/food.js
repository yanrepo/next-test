import Card from '../components/card/Card';
import { loadFood } from '../lib/load-food';

export async function getStaticProps() {
  const food = await loadFood();

  return { props: { food } };
}

export default function Food({ food }) {
  return (
    <>
      <div className="card-box">
        {food.map((i) => {
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
