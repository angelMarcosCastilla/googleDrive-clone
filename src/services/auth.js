import { clientSupabase } from '../supabase/client'

export const loginWithGoogle = async () => {
  const { user, session, error } = await clientSupabase.auth.signIn({
    provider: 'google'
  })

  return { user, session, error }
}

export const logout = async () => {
  const { error } = await clientSupabase.auth.signOut()
  return { error }
}
