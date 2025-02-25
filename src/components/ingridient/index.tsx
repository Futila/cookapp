import { Image, Pressable, PressableProps, Text } from "react-native";


import { s } from "./styles";


type IngridientProps = PressableProps & {
  image: string
  name: string
  selected?: boolean
}

export function Ingridient({image, name, selected = false, ...rest}: IngridientProps) {
  return(
    <Pressable style={[s.container, selected && s.selected]} {...rest}>
      <Image style={s.image} source={{uri: image}} />
      <Text style={s.title}>{name}</Text>
    </Pressable>
  )
}