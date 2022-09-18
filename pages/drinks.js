import Card from '../components/card/Card';
import { loadDrinks } from '../lib/loadfood';

export async function getStaticProps() {
  const drinks = await loadDrinks();
  return { props: { drinks } };
}

export default function Drinks({ drinks }) {
  return (
    <div className="card-box">
      {drinks.map((i) => (
        <Card key={i.id} i={i} />
      ))}
    </div>
  );
}
