

const supabaseUrl  = 'https://rghspobxnphvmzhnakmv.supabase.co'
const supabaseKey  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnaHNwb2J4bnBodm16aG5ha212Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMzc3NTMsImV4cCI6MjA5NzkxMzc1M30.fSIJv7L3BjLqoPlWOahwCp6lrLJIANSPESFmMEXad-o'
const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

async function getProducts() {
  const { data, error } = await client
    .from('products')
    .select(`
      *,
      sub-category (name),
      product_img (image_url, is_primary),
      junction_table (
        category (name)
      )
    `)

  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Products:', data)
  }
}

getProducts()

