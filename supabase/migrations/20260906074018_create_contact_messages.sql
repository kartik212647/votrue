/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
- `id` (uuid, primary key, auto-generated)
- `name` (text, not null — the sender's full name)
- `email` (text, not null — the sender's email address)
- `message` (text, not null — the message content)
- `created_at` (timestamptz, defaults to now — when the message was submitted)

2. Security
- Enable RLS on `contact_messages`.
- Allow anon + authenticated INSERT only — visitors can submit messages without signing in.
- No SELECT/UPDATE/DELETE for anon — only the database admin can read messages via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);
