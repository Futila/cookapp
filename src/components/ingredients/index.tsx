import { ScrollView } from "react-native";
import { Ingridient, IngridientProps } from "../ingridient";
import { services } from "@/services";
import { s } from "./styles";



type IngredientsProps = {
  ingredients: IngridientProps[]
}


export function Ingredients({ingredients}: IngredientsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.ingredientsContent}
      style={s.container}
    >
      {ingredients.map((ingredient) => (
        <Ingridient
          key={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
          name={ingredient.name}
        />
      ))}
    </ScrollView>

  )
}