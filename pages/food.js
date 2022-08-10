import supabase from '../db/supabase';
import css from '../components/card/Card.module.css';
import lime from '../public/lime.jpg';
import Image from 'next/image';

export async function getStaticProps() {
  let { data: food } = await supabase
    .from('food')
    .select('id,name,text');

  return { props: { food } };
}

export default function Food({ food }) {
  return (
    <>
      <h1>take a break</h1>
      <div className="card-box">
        {food.map((i) => {
          return (
            <div className={css.card} key={i.id}>
              <Image
                className={css.cardImg}
                src={lime}
                alt="lime-image"
              />
              <h5 className={css.cardTitle}>{i.name}</h5>
              <p className={css.cardText}>{i.text}</p>
              <div className={css.cardCounter}>/ COUNTER</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
