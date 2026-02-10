const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseKey: process.env.SUPABASE_ANON_KEY
  });
});

app.listen(3000);