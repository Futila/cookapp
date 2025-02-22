import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";


import {s} from "./styles"

type ButtonProps = TouchableOpacityProps & {
  title: string
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={s.container} {...rest}>
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  )
}