import { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import UsersFeed from './src/components/GithubUsers';
import Header from './src/components/Header';
import StoriesFeed from './src/components/StoriesFeed';
import {styles} from './styles'

export default function App() {

  const [users, setUsers] = useState([])

  const getUsers = async ()=>{
    try{
      const response = await fetch(`https://api.github.com/orgs/github/members`)
      const data = await response.json()
      setUsers(data)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getUsers()
  }, [])

  return (
      <SafeAreaView style={styles.container}>
      <Header/>
        <ScrollView>
          <StoriesFeed users={users}/>
          <UsersFeed users={users}/>
        </ScrollView>
      </SafeAreaView>
  );
}


