import { router, useLocalSearchParams } from "expo-router";
import { View, Text} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";



import { s } from "./styles"
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/ingredients";
import { FlatList } from "react-native";
import { Recipe } from "@/components/Recipe";
import { Loading } from "@/components/Loading";

export default function Recipes() {
  const [isLoading, setIsLoading] = useState(true)
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  
  const params = useLocalSearchParams<{ingredientsIds: string}>();
  const ingredientsIds = params.ingredientsIds.split(",")

  //cheking the income ids
  // console.log(params)
  // console.log(ingredientsIds)


  useEffect(() => {
    services.recipes
      .findByIngredientsIds(ingredientsIds)
      .then((response) => setRecipes(response))
      .finally(() => setIsLoading(false))
  }, [])


  useEffect(() => {
    services.ingredients.
    findByIds(ingredientsIds)
    .then(setIngredients)
    .finally(() => setIsLoading(false))
  }, [])


  if(isLoading) {
    return <Loading/>
  }

  return (
    <View style={s.container}>
    <View style={s.header}>
      <MaterialIcons
        size={32}
        name="arrow-back"
        onPress={() => router.back() }
      />

      <Text style={s.title}>Ingredientes</Text>
    </View>

   {<Ingredients ingredients={ingredients}/>}


   <FlatList
    data={recipes}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
      <Recipe
        recipe={item}
        onPress={() => router.navigate(`/recipe/${item.id}`)}
      />
    )}
   style={s.recipes}
   contentContainerStyle={s.recipesContent}
   showsVerticalScrollIndicator={false}
   numColumns={2}
   columnWrapperStyle={{gap:16}}
   ListEmptyComponent={() => (
    <Text style={s.empty}>
      Nenhuma receita encontrada. Escolha outros ingredientes.
    </Text>
  )}
   />
  </View>
  )
}