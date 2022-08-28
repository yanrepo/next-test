import supabase from './supabase';

export async function loadFood() {
  let { data: food, error } = await supabase
    .from('food')
    .select('*');
  food && console.log('>>SUPA>food, DATA: ', food[0]);
  error && console.log('>>SUPA>food, ERROR: ', error);
  return food;
}

export async function loadDrinks() {
  let { data: drinks, error } = await supabase
    .from('drinks')
    .select('*');
  drinks && console.log('>>SUPA>drinks>DATA: ', drinks[0]);
  error && console.log('>>SUPA>drinks>ERROR: ', error);
  return drinks;
}
