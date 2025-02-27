import { supabase } from "./supabase";


async function findByIds(ids: string[]){
  const { data } = await supabase
  .from("ingredients")
  .select()
  .in("id", ids)
  .order("name")
  .overrideTypes<IngredientResponse[]>()

  return data ?? []
}



// Get all the ingredients on the database
async function findAll() {
  const { data } = await supabase
  .from("ingredients")
  .select()
  .order("name")
  .overrideTypes<IngredientResponse[]>()

  return data ?? []
}


export {findAll, findByIds}