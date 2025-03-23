// lib/auth.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('your-supabase-url', 'your-supabase-key');

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const handleLogout = async () => {
  await supabase.auth.signOut()
  window.location.href = '/login'
}

export { supabase };