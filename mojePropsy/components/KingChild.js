import { Text, View, Button } from "react-native-web";

const KingChild = ({onDataReceiver}) =>{

    function sendChildToApp(){
        const data="dane od królewskiego dziecka";
        onDataReceiver(data);
    }

    return(
        <View>
            <Text>Test dziecka</Text>
            <Button title="wyslij z dziecka do rodzica" onPress={sendChildToApp}></Button>
        </View>
    )
}

export default KingChild;