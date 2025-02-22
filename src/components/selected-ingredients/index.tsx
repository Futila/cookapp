import { Text, View } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

import { theme } from "@/theme";
import { s } from "./styles";
import { Button } from "../button";



export function SelectedIngredients() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.label}>3 ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
        />
      </View>

      <Button title="Encontrar"/>
    </View>
  )
}