import supabase from '../db/supabase';
import Card from '../components/card/Card';

export async function getStaticProps() {
  let { data: other } = await supabase.from('other').select('*');

  return { props: { other } };
}

export default function Basket({ other }) {
  return (
    <>
      <h1>take a break</h1>
      <div className="card-box">
        {other.map((i) => {
          return <Card key={i.id} title={i.title} text={i.text} />;
        })}
      </div>
    </>
  );
}
