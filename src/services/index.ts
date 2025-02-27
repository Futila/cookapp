import * as ingredients from "./ingredientsService"
import * as recipes from "./recipesService"


export const services = {
  ingredients, 
  recipes,
  storage: {
    imagePath: "https://wtwuqnfwwhsacyirodkk.supabase.co/storage/v1/object/public/ingredients"
  }
}




