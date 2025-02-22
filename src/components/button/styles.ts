import { theme } from "@/theme";
import { StyleSheet } from "react-native";


export const s = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.green_600,
    alignItems: "center", 
    justifyContent: "center", 
    height: 48,
    width: "100%",
    borderRadius: theme.borderRadius.sm
  }, 
  text: {
    color: theme.colors.white,
    fontSize: theme.fonts.size.body.sm, 
    fontFamily: theme.fonts.family.medium
  }
})