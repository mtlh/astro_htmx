import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = import.meta.env.SUPABASE_URL
const supabaseAnonKey: string = import.meta.env.SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
})