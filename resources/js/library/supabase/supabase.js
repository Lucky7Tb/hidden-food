const supabase = require('@supabase/supabase-js');

const supabaseClient = supabase.createClient(
	"https://ccbzidgtbnectbxdhvtk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNzQ3NTM1MywiZXhwIjoxOTUzMDUxMzUzfQ.3Cen8FU0GioyUxR3dZwfU7pj6B6aHtgLPsSuAPovQqs",
	{ fetch: fetch }
);

module.exports = supabaseClient;
