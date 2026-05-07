/*
  # Newsletter Subscribers Table

  Creates a table to store email sign-ups from the Warfox Sequence landing page.

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, not null)
      - `source` (text, default 'landing') — which page the signup came from
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS
    - INSERT policy: anyone (anon) may insert their own email
    - No SELECT policy for anon — subscribers cannot read other rows
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email      text UNIQUE NOT NULL,
  source     text NOT NULL DEFAULT 'landing',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);
