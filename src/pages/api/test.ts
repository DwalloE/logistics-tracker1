import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../services/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data, error } = await supabase.from('trips').select('*');
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(200).json(data);
}
