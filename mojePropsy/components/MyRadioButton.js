import { RadioButton } from "react-native-paper";
import { View, Text } from "react-native-web";

MyRadioButton = ({label}) =>{
    return(
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <RadioButton
            value={value}
            status={checked === value ? "checked" : "unchecked"}
            onPress={() => onValueChange(value)}
            />
            <Text>{label}</Text>
        </View>
    )
}

export default MyRadioButton;