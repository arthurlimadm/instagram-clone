import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import FeatherIcons from 'react-native-vector-icons/Feather';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export default function Header(){
    return (<View style={styles.headerContainer}>
        <View style={styles.headerComponent}>
            <Image source={{
                uri: 'https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png'
            }} style={styles.headerImageLogo}></Image>

            <TouchableOpacity><FeatherIcons name="plus-square" size={28} style={styles.headerPlusIcon}/></TouchableOpacity>
            <TouchableOpacity><AntDesignIcons name="hearto" size={28} style={styles.headerHeartIcon}/></TouchableOpacity>
            <TouchableOpacity><FontistoIcons name="messenger" size={28} style={styles.headerMessageIcon}/></TouchableOpacity>
        </View>
    </View>)
}