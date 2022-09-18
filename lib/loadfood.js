import supabase from './supabase';

export async function loadFood() {
  let { data: food, error } = await supabase
    .from('food')
    .select('*')
    .eq('type', 'food');
  error && console.log('>>SUPA>loadFood, ERROR: ', error);
  return food;
}

export async function loadDrinks() {
  let { data: drinks, error } = await supabase
    .from('food')
    .select('*')
    .eq('type', 'drinks');
  error && console.log('>>SUPA>loadDrinks, ERROR: ', error);
  return drinks;
}
