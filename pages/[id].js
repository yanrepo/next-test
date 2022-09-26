import { loadAllFood } from '../lib/loadfood';
import { loadOneItem } from '../lib/loadfood';
import CardPage from '../components/card/CardPage';

export async function getStaticPaths() {
  const allFood = await loadAllFood();
  const paths = allFood.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const oneItem = await loadOneItem(params);
  const item = oneItem[0];
  return { props: { item } };
}

export default function DynamicPage({ item }) {
  return <CardPage item={item} />;
}
