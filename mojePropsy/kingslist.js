import {Text, View, FlatList} from 'react-native';



const KingsList = ({KingsList}) => {
    const {id, name, reignDate} = KingsList [0];

    return(
        <View>
            <Text>LISTA KRÓLÓW z FlatList {name}</Text>
            <FlatList
                data={KingsList}
                renderItem={({item: king})=>(
                    <View>
                        <Text>{king.id}, imię: {king.name}
                        panowanie: {king.reignDate}</Text>
                    </View>
                    )}
                />
        </View>
    )
}

export default KingsList ;