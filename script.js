
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

async function getProducts() {
  const { data, error } = await supabase
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

