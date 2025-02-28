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


async function findByRecipeId(id: string) {
  const { data, error } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ ingredients: IngredientResponse }[]>()
    if (error) {
      console.error("Erro ao buscar ingredientes:", error)
      return []
    }
  
    console.log("Dados crus do Supabase:", data)
    return data ? data.map((item) => item.ingredients) : []

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


export {findAll, findByIds,findByRecipeId}