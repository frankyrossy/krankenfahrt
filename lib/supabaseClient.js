import { createClient } from '@supabase/supabase-js';

const supabase = createClient('your-supabase-url', 'your-supabase-key');

export default supabase;