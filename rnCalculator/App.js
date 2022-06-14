import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Calculator from './components/Calculator';


export default function App() {

  return (
    <View>
      <Calculator />
      <StatusBar style="auto" />
    </View>
  );
}

