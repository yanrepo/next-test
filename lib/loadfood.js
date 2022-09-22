import supabase from './supabase';

export async function loadFood() {
  let { data: food, error } = await supabase
    .from('food')
    .select('*')
    .eq('type', 'food');
  if (error) console.log('>>SUPA>loadFood, ERROR: ', error);
  else return food;
}

export async function loadDrinks() {
  let { data: drinks, error } = await supabase
    .from('food')
    .select('*')
    .eq('type', 'drinks');
  if (error) console.log('>>SUPA>loadDrinks, ERROR: ', error);
  else return drinks;
}

export async function loadAllFood() {
  let { data: allFood, error } = await supabase
    .from('food')
    .select('*');
  if (error) console.log('>>SUPA>loadAllFood, ERROR: ', error);
  else return allFood;
}
