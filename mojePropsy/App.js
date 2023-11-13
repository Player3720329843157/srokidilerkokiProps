import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import KingsList from './kingslist';
import KingChild from './components/KingChild';
import { useState } from 'react';

export default function App() {
  let kings = [
    {id:1, name:"Bolesłwa Chrobry", reignDate:"992-1025"},
    {id:2, name:"Mieszko II Lambert", reignDate:"1025-1031"},
    {id:3, name:"Bolesłwa Śmiały", reignDate:"1058-1079"},
    {id:4, name:"Przemysław II", reignDate:"1206-1295"}
  ]

  const[childData, setChildData] =
  useState(null); 
  const childDataHandler = (data) =>{
    setChildData(data);
  }

  return (
    <View style={styles.container}>
      <Text>
        Data received from a child component:
      </Text>
      {
        childData && <Text style={{color:"red"}}>{childData}</Text>
      }
      <KingChild onDataReceiver={childDataHandler}/>
    </View>
  );
}
0
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
