import supabase from '../db/supabase';
import Card from '../components/card/Card';

export async function getStaticProps() {
  let { data: drinks } = await supabase.from('drinks').select('*');

  return { props: { drinks } };
}

export default function Home({ drinks }) {
  return (
    <>
      <h1>take a break</h1>
      <div className="card-box">
        {drinks.map((i) => {
          return <Card key={i.id} title={i.title} text={i.text} />;
        })}
      </div>
    </>
  );
}
