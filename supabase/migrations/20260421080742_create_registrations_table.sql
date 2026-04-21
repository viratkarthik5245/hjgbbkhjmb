/*
  # Create Registrations Table

  ## Overview
  Creates a table to store user registrations for the TCS NQT 2026 Crash Course by Codera.

  ## New Tables
    - `registrations`
      - `id` (uuid, primary key) - Auto-generated unique identifier
      - `full_name` (text) - Student's full name
      - `email` (text) - Student's email address
      - `phone` (text) - Student's phone number
      - `college` (text) - College/University name
      - `graduation_year` (text) - Year of graduation (2024, 2025, or 2026)
      - `preferred_track` (text) - Selected track (Ninja, Digital, or Prime)
      - `created_at` (timestamptz) - Registration timestamp

  ## Security
    - Enable RLS on `registrations` table
    - Allow anonymous users to INSERT registrations (public signup form)
    - Only authenticated admin users can SELECT (no admin setup, so effectively locked for reads)

  ## Important Notes
    1. Email is indexed for faster lookups
    2. All fields have meaningful defaults to prevent NULL issues
    3. Registration data is write-only from the public client
*/

CREATE TABLE IF NOT EXISTS registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  college text NOT NULL DEFAULT '',
  graduation_year text NOT NULL DEFAULT '2026',
  preferred_track text NOT NULL DEFAULT 'Ninja',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS registrations_email_idx ON registrations(email);
CREATE INDEX IF NOT EXISTS registrations_created_at_idx ON registrations(created_at DESC);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a registration"
  ON registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own registration"
  ON registrations
  FOR SELECT
  TO authenticated
  USING (false);
