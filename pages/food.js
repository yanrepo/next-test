import Card from '../components/card/Card';
import { loadFood } from '../lib/loadfood';

export async function getStaticProps() {
  const food = await loadFood();
  return { props: { food } };
}

export default function Food({ food }) {
  return (
    <div className="card-box">
      {food.map((i) => (
        <Card i={i} />
      ))}
    </div>
  );
}
