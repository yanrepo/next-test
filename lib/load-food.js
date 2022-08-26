import supabase from './supabase';

export async function loadFood() {
  let { data: food } = await supabase.from('food').select('*');

  return food;
}

export async function loadDrinks() {
  let { data: drinks } = await supabase.from('drinks').select('*');

  return drinks;
}
