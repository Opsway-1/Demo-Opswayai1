import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database tables
export interface DemoRequest {
  id: string;
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  service_of_interest: string;
  other_message?: string;
  created_at: string;
  updated_at: string;
}

export interface DemoRequestInsert {
  first_name: string;
  last_name: string;
  company_name: string;
  email: string;
  service_of_interest: string;
  other_message?: string;
}