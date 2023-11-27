import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PolishKing from './PolishKing';
import KingChild from './kingChild';
import {RadioButton} from 'react-native-paper';
import

const{prrority, setPriority} = useState("")

function sendDataHandler(){
  console.log("wysylam") ;
}

  return (
    <View style={styles.container}>
    <MyRadioButton label="nie podoba mi sie"
      value:"unlike"
      checked={prrority}
      onValueChange={setPriority}
      <RadioButton value="Normal" status={ "Normal" === "Normal" ? "checked": "unchecked"}/>
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
