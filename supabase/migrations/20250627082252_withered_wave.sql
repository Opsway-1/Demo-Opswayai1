/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `first_name` (text)
      - `last_name` (text)
      - `company_name` (text)
      - `email` (text)
      - `service_of_interest` (text)
      - `other_message` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for inserting demo requests (public access for form submissions)
    - Add policy for reading demo requests (admin access only)
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  company_name text NOT NULL,
  email text NOT NULL,
  service_of_interest text NOT NULL,
  other_message text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Policy to allow anyone to insert demo requests (for form submissions)
CREATE POLICY "Anyone can submit demo requests"
  ON demo_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy to allow only authenticated users to read demo requests (admin access)
CREATE POLICY "Only authenticated users can read demo requests"
  ON demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);

-- Function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at on row updates
CREATE TRIGGER update_demo_requests_updated_at
  BEFORE UPDATE ON demo_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();