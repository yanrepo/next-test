import supabase from './supabase';

export async function loadFood() {
  let { data: food, error } = await supabase
    .from('food')
    .select('*');
  error && console.log('>>SUPA>food, ERROR: ', error);
  return food;
}

export async function loadDrinks() {
  let { data: drinks, error } = await supabase
    .from('drinks')
    .select('*');
  error && console.log('>>SUPA>drinks>ERROR: ', error);
  return drinks;
}
