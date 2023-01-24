import { FlatList, Image, View, Text } from "react-native";
import { styles } from "./style";

export default function StoriesFeed({users}){

    return(<View style={styles.container}>
        <View style={styles.storiesCreateStory}>

        </View>
        <FlatList style={styles.storiesComponent} 
        data={users}
        horizontal
        contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}
        renderItem={({item})=><View style={styles.storiesStory}>
            <Image source={{
             uri: item.avatar_url,
            }} style={styles.storiesImage}/>

            <Text style={styles.storiesLabel}>{item.login}</Text>
        </View>
        }/>
    </View>)
}