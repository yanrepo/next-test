import Card from '../components/card/Card';
import { loadOther } from '../lib/load-food';

export async function getStaticProps() {
  const other = await loadOther();

  return { props: { other } };
}

export default function Basket({ other }) {
  return (
    <>
      <div className="card-box">
        {other.map((i) => {
          return <Card key={i.id} title={i.title} text={i.text} />;
        })}
      </div>
    </>
  );
}
