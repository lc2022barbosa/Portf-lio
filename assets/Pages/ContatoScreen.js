import {useState} from 'react'
import { View, Text, StyleSheet,Image, ScrollView,TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function ContatoScreen() {
  const navigation = useNavigation()
  const [nameField, setNameField] = useState()
  const [lastNameField, setLastNameField] = useState()
  const [subjectField, setSubjectField] = useState()
  const [messageField, setMessageField] = useState()
  return (
    <ScrollView style={styles.container}>
    <View style={styles.conteudo}>
    
        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Nome</Text>
        <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu nome'
            placeholderTextColor='#fff'
            value={nameField}
            onChangeText={t => setNameField(t)}
          />
        </View>  

        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Sobrenome</Text>
        <TextInput 
            style={styles.inputField} 
            placeholder='Digite seu Sobrenome'
            placeholderTextColor='#fff'
            value={lastNameField}
            onChangeText={t => setLastNameField(t)}
          />
        </View>  

        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Assunto</Text>
        <TextInput 
            style={styles.inputField} 
            placeholder='Digite o seu Assunto'
            placeholderTextColor='#fff'
            value={subjectField}
            onChangeText={t => setSubjectField(t)}
          />
        </View>  

        <View style={styles.inputArea}>
        <Text style={styles.inputLabel}>Mensagem</Text>
        <TextInput 
            style={styles.inputField} 
            placeholder='Digite sua mensagem'
            placeholderTextColor='#fff'
            value={messageField}
            onChangeText={t => setMessageField(t)}
          />
        </View>  
        <TouchableOpacity style={styles.enviar}>
          <Text style={styles.enviartext}>Enviar</Text>
        </TouchableOpacity>
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
  conteudo:{
    alignItems:'center',
    paddingHorizontal: 50
  },
   inputArea: {
    width: 200,
    paddingTop: 20,
  },
  inputLabel: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 7,
  },
  inputField: {
    color: '#000',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#000',
    backgroundColor: '#00CED1',
    fontSize: 15,
    padding: 10,
  },
  enviar:{
    width: 150,
    height: 50,
    backgroundColor: '#00CED1',
    marginTop: 40,
    alignItems: 'center',
    paddingTop: 15,
    borderRadius: 10
  },
  enviartext:{
    fontWeight: 'bold',
    fontSize: 15
  },
  footer:{
    width: 400,
    height: 50,
    backgroundColor: '#00CED1',
    marginTop: 300
  },
  footertext:{
    alignSelf: 'center',
    paddingTop: 15,
    fontSize: 15,
    fontWeight: 'bold'
  }
})