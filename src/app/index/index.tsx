import { useEffect, useState } from "react"
import {Text, View, ScrollView, Alert} from "react-native"



import { s } from "./styles"
import { Ingridient } from "@/components/ingridient"
import { SelectedIngredients } from "@/components/selected-ingredients"
import { services } from "@/services"
import { Loading } from "@/components/Loading"


export default function Index() {
  const [selectedIngridients, setSelectedIngridients] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])


  function handleToggleSelectedIngridient(value: string) {
    if(selectedIngridients.includes(value)) {
      return setSelectedIngridients((prevState) => prevState.filter((item) => item !== value))
    }

    setSelectedIngridients((prevState) => [...prevState, value] )
  }

  function handleClearSelectedingredients() {
    Alert.alert("Limpar", "Deseja limpar tudo", [
      { text: "Não", style: "cancel"}, 
      { text: "Sim", onPress: () => setSelectedIngridients([])}
    ])
  }

  useEffect(() => {
    services.ingredients
    .findAll()
    .then(data => {
      console.log(data)
      setIngredients(data)
    })
    .finally(() => setIsLoading(false) )
  }, [])


  if (isLoading) {
    return <Loading/>
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
      {ingredients.map((item) => (
          <Ingridient
            key={item.id}
            image={`${services.storage.imagePath}/${item.image}`}
            name={item.name}
            selected={selectedIngridients.includes(item.id)}
            onPress={() => handleToggleSelectedIngridient(item.id)}
          />
      ))}
    </ScrollView> 

    {selectedIngridients.length > 0 && (
      <SelectedIngredients
        onClear={handleClearSelectedingredients}
        onSearch={() => {}}
        quantity={selectedIngridients.length}
      />
    )}

    </View>
  )
}