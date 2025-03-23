// lib/auth.js
import supabase from './supabaseClient'

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const handleLogout = async () => {
  await supabase.auth.signOut()
  window.location.href = '/login'
}