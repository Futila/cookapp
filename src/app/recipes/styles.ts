
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
  }, 
  recipes: {
    padding: 32
  }, 
  recipesContent: {
    gap: 16
  }, 
  empty: {
    fontSize: theme.fonts.size.body.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray_400,
  },
})