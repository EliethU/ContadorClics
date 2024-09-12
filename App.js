import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,  TouchableHighlight } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);

  const contador = () => {
    setCount(count + 1)
  }
  return (
    <View style={styles.container}>      
      <TouchableHighlight
        style={{borderColor:'blue',borderWidth:1, height:40, justifyContent:'center'}}
        onPress={()=>Alert.alert('Haz presionado el boton')}>
        <Text>Presiona aqui</Text>
        </TouchableHighlight>
      <Text style={{ fontSize: 24, marginBottom:20}}>Contador: {count}</Text>
      <Button tittle="Incrementar " onPress={contador}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
