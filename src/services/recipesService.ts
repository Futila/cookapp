import { supabase } from "./supabase";



async function findByIngredientsIds(ids: string[]) {
  const  { data } = await supabase
  .rpc("recipes_by_ingredients", {ids})

  console.log("Dados vindo de recipes => ", data)

  return data ?? []
}



async function show(id: string) {
  const { data } = await supabase
    .from("recipes")
    .select()
    .eq("id", id)

  return data
}

export { findByIngredientsIds, show }

