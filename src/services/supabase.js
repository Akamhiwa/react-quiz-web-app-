import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://piwnanfnfnltyfpgzxag.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpd25hbmZuZm5sdHlmcGd6eGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3ODA5MTMsImV4cCI6MjA0MjM1NjkxM30.2fCVSlNYmVB2uOT5eyxE7998BXBh61HAwtnVXzy7RS8`
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase
