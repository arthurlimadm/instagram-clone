import { useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function UsersFeed({users}) {
  const [isLiked, setIsLiked] = useState([])

  return (
    <View style={styles.container}>

      <FlatList data={users}

      renderItem={({item})=> <View style={styles.component} key={item.id}>

        <View style={styles.feedHeader}>
            
          <View style={styles.feedComponent}>
            <Image source={{
              uri: item.avatar_url,
            }} style={styles.imageIcon}/>

            <Text style={styles.name}>{item.login}</Text>
          </View>

          <Entypo name='dots-three-horizontal' size={20} style={styles.feedDots}/>
        </View>
        
        <Image source={{
          uri: item.avatar_url,
        }} style={styles.userImage}/>

        <View style={styles.iconsContainer}>

          <TouchableOpacity onPress={()=> {
            if(isLiked.includes(item.id)){
              setIsLiked(prevstate=> prevstate.filter((object)=> object.id != item.id))
            }else{
              setIsLiked(prevstate=> [...prevstate, item.id])
            }
          }}>
            {isLiked.includes(item.id) ? <AntDesign name="heart" size={28} color="red" style={{marginLeft: 15}}/> : <AntDesign name="hearto" size={28} style={{marginLeft: 15}}/>}
          </TouchableOpacity> 

          <TouchableOpacity><Fontisto name="comment" size={25} style={{margin: 15}}/></TouchableOpacity>
          <TouchableOpacity><Ionicons name="paper-plane-outline" size={30}/></TouchableOpacity>
        </View>

        <View style={styles.likedBy}>
          <Text><Text style={styles.likedByLabel}>Liked By</Text> <Text style={styles.likedByUsers}>{users[Math.floor(Math.random() * users.length)].login}, {users[Math.floor(Math.random() * users.length)].login}, {users[Math.floor(Math.random() * users.length)].login}</Text></Text>
        </View>

        <View style={styles.feedLegend}>
          <Text><Text style={styles.feedLegendLabel}>{item.login}</Text>   Hello! On on fake instagram made by Arthur! Visit my profile to know more: github.com/arthurlimadm</Text>
          
        </View>

      </View>}

      />
    </View>);
}