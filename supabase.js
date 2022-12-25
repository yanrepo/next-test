import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPA_URI,
  process.env.SUPA_KEY
);

export default supabase;
