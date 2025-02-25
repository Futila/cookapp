import { supabase } from "./supabase";



// Get all the ingredients on the database
async function findAll() {
  const { data } = await supabase
  .from("ingredients")
  .select()
  .order("name")
  .overrideTypes<IngredientResponse[]>()

  return data ?? []
}


export {findAll}