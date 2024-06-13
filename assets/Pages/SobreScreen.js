
import { View, Text, StyleSheet,Image, ScrollView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SobreScreen() {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
    <View style={styles.conteudo}>
        <Image source={require('../lara.png')} style={styles.image}/>
        <Text style={styles.text}>Meu nome é Lara Kessia, estudo na escola E.E.E.P. Deputado Roberto Mesquita e estou cursando o 3° ano em  desenvolvimento de sistemas. Tenho 18 anos e sou uma pessoa que gosta de experimentar coisas novas e aprender. Sou uma pessoa carismática,valorizo muito meus professores, e igualmente colegas da escola, para finalizar sou uma pessoa resiliente, capaz de superar desafios com coragem e determinação.</Text>
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
  conteudo:{
    alignItems:'center',
    paddingHorizontal: 50
  },
  image:{
    marginTop: 50
  },
  text:{
    textAlign: 'justify',
    marginTop: 20
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