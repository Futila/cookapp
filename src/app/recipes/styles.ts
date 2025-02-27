
import { theme } from "@/theme";
import { StyleSheet } from "react-native";


export const s = StyleSheet.create({
  container: {
    flex: 1
  }, 
  header: {
    paddingHorizontal: 32, 
    paddingTop: 62, 
    marginBottom: 12
  }, 
  title: {
    fontFamily: theme.fonts.family.bold, 
    fontSize: theme.fonts.size.heading.md, 
    marginTop:22, 
  }
})