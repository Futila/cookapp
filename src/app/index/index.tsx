import { useState } from "react"
import {Text, View, ScrollView} from "react-native"



import { s } from "./styles"
import { Ingridient } from "@/components/ingridient"
import { SelectedIngredients } from "@/components/selected-ingredients"


export default function Index() {
  const [selectedIngridients, setSelectedIngridients] = useState<string[]>([])


  function handleToggleSelectedIngridient(value: string) {
    if(selectedIngridients.includes(value)) {
      return setSelectedIngridients((prevState) => prevState.filter((item) => item !== value))
    }

    setSelectedIngridients((prevState) => [...prevState, value] )
  }

  return (
    <View style={s.container}>
      <Text style={s.title}>
        Escolha {"\n"}
         <Text style={s.subtitle}>os produtos</Text>
      </Text>

      <Text style={s.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>


    <ScrollView
      contentContainerStyle={s.ingridientsList}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({length: 30}).map((item, idx) => (
          <Ingridient
            key={idx}
            image=""
            name="Maça"
            selected={selectedIngridients.includes(String(idx))}
            onPress={() => handleToggleSelectedIngridient(String(idx))}
          />
      ))}
    </ScrollView> 

    {selectedIngridients.length > 0 && (
      <SelectedIngredients/>
    )}

    </View>
  )
}