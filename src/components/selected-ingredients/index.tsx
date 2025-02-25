import { Text, View } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated";

import { theme } from "@/theme";
import { s } from "./styles";
import { Button } from "../button";


type SelectedIngredientsProps = {
  quantity: number
  onClear: () => void
  onSearch: () => void
}





export function SelectedIngredients({quantity, onClear, onSearch} : SelectedIngredientsProps) {
  return (
    <Animated.View style={s.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
      <View style={s.header}>
        <Text style={s.label}>3 ingredientes selecionados</Text>
        <MaterialIcons
          name="close"
          size={24}
          color={theme.colors.gray_400}
          onPress={onClear}
        />
      </View>

      <Button title="Encontrar" onPress={onSearch}/>
    </Animated.View>
  )
}