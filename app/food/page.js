import css from './css.module.css';
import supabase from '../../supabase';
import Card from '../../components/card/Card';

export default async function Food() {
  const { data: food } = await supabase.from('food').select('*');

  return (
    <div className={css.cardbox}>
      {food.map((i) => (
        <Card key={i.id} i={i} />
      ))}
    </div>
  );
}
