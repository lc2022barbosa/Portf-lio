
import { View, Text, StyleSheet,Image, ScrollView,TouchableOpacity, Linking} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ProjetoScreen() {
  const navigation = useNavigation()
  const bolinhaButton = () => {
    Linking.openURL('https://github.com/lc2022barbosa/Bolinha')
  }
  const loginBarbeariaButton = () =>{
    Linking.openURL('https://github.com/lc2022barbosa/Barbearia-curso')
  }
  const loginCpfButton = () => {
    Linking.openURL('https://github.com/lc2022barbosa/Projeto-de-Login-de-cpf')
  }
  const pastelariaButton = () => {
    Linking.openURL('https://github.com/lc2022barbosa/Pastelaria')
  }
  const pizzaHouseButton = () => {
    Linking.openURL('https://github.com/lc2022barbosa/Parcial-Lara')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
          <TouchableOpacity style={styles.imagearea} onPress={bolinhaButton}>
            <Image source={require('../Bolinha.png')}/>
            <Text style={styles.imagetext}>Bolinha com gravidade</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagearea} onPress={loginBarbeariaButton}>
            <Image source={require('../cursoBarbearia.png')}/>
            <Text style={styles.imagetext}>Login Curso Barbearia</Text>
          </TouchableOpacity>
        
      </View>
      <View style={styles.row}>
          <TouchableOpacity style={styles.imagearea} onPress={loginCpfButton}>
            <Image source={require('../loginCpf.png')}/>
            <Text style={styles.imagetext}>Login com CPF</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imagearea} onPress={pastelariaButton}>
            <Image source={require('../loginPastelaria.png')}/>
            <Text style={styles.imagetext}>Login Pastelaria</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.row}>
          <TouchableOpacity style={styles.imagearea} onPress={pizzaHouseButton}>
            <Image source={require('../pizzahouse.png')}/>
            <Text style={styles.imagetext}>Pizza House</Text>
          </TouchableOpacity>
      </View>
        
      <View style={styles.footer}>
        <Text style={styles.footertext}>Criado por Lara</Text>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
   row:{
    flexDirection: 'row'
  },
  imagearea:{
    width: 100,
    marginHorizontal:40,
    marginTop: 50
  },
  imagetext:{
    fontSize: 18,
    textAlign: 'center'
  },
  footer:{
    width: '100%',
    height: 50,
    backgroundColor: '#00CED1',
    marginTop: 150
  },
  footertext:{
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
})