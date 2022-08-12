import supabase from '../db/supabase';
import Card from '../components/card/Card';

export async function getStaticProps() {
  let { data: food } = await supabase.from('food').select('*');

  return { props: { food } };
}

export default function Food({ food }) {
  return (
    <>
      <h1>take a break</h1>
      <div className="card-box">
        {food.map((i) => {
          return <Card key={i.id} title={i.title} text={i.text} />;
        })}
      </div>
    </>
  );
}
