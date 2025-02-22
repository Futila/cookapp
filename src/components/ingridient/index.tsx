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
      <Image style={s.image} source={{uri: "https://www.mundoecologia.com.br/wp-content/uploads/2019/03/Ma%C3%A7%C3%A3-%C3%A9-Vermelha-1.jpg"}} />
      <Text style={s.title}>Maça</Text>
    </Pressable>
  )
}