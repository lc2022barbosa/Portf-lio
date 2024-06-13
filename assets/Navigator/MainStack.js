
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import HomeScreen from '../Pages/HomeScreen'
import SobreScreen from '../Pages/SobreScreen'
import ProjetoScreen from '../Pages/ProjetoScreen'
import ContatoScreen from '../Pages/ContatoScreen'

const MainStack = createNativeStackNavigator()
export default () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name='Home' component={HomeScreen} options={{
        title: 'Início',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#00CED1',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>

      <MainStack.Screen name='Sobre' component={SobreScreen} options={{
        title: 'Sobre',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#00CED1',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>

      <MainStack.Screen name='Projetos' component={ProjetoScreen} options={{
        title: 'Projetos',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#00CED1',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>


      <MainStack.Screen name='Contato' component={ContatoScreen} options={{
        title: 'Contato',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#00CED1',
          height: 100
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 28,
          fontWeight: 'bold'
        },
        
      }}/>
    </MainStack.Navigator>
  )
}