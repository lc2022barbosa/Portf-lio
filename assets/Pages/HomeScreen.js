
import { View, Text, StyleSheet,Image, ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen() {
  const navigation = useNavigation()
  const handleSobreButton = () => {
    navigation.navigate('Sobre')
  }
  const handleProjetoButton = () => {
    navigation.navigate('Projetos')
  }
  const handleContatoButton = () => {
    navigation.navigate('Contato')
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={handleSobreButton}>
          <Text style={styles.menuitens}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProjetoButton}>
          <Text style={styles.menuitens}>Projetos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleContatoButton}>
          <Text style={styles.menuitens}>Contato</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conteudo}>
          <Text style={styles.title}>4 últimos projetos publicados</Text>
        <View style={styles.row}>
          <View style={styles.imagearea}>
            <Image source={require('../Bolinha.png')}/>
            <Text style={styles.imagetext}>Bolinha com gravidade</Text>
          </View>
          <View style={styles.imagearea}>
            <Image source={require('../cursoBarbearia.png')}/>
            <Text style={styles.imagetext}>Login Curso Barbearia</Text>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={styles.imagearea}>
            <Image source={require('../loginCpf.png')}/>
            <Text style={styles.imagetext}>Login com CPF</Text>
          </View>
          <View style={styles.imagearea}>
            <Image source={require('../loginPastelaria.png')}/>
            <Text style={styles.imagetext}>Login Pastelaria</Text>
          </View>
        </View>
        
          <View style={styles.footer}>
            <Text style={styles.footertext}>Criado por Lara</Text>
          </View>
    </View>   
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  menu:{
    flexDirection: 'row',
    gap: 50,
    marginTop: 10,
    marginLeft: 90
  },
  menuitens:{
    fontSize: 15,
    fontWeight: 'bold'
  },
  conteudo:{
    padding: 30
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30
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
    marginTop: 60
  },
  footertext:{
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
})