import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, FlatList } from 'react-native';
// import Constants from 'expo-constants';

// You can import from local files
// import AssetExample from './components/AssetExample';
import HistoryItems from './components/HistoryItems'

// or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';
// These are the list used in the application. You can move them to any component needed.

import {useState} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]


export default function App() {

  const [searchInput, setSearchInput] = React.useState(initialHistoryList)
  const [suggestedInput, setSuggestedInput] = React.useState('')

  const enterText = (text) => {
    setSearchInput(initialHistoryList.filter((item) => item.title.toLowerCase().includes(text.toLowerCase())))
    setSuggestedInput(initialHistoryList)
  }

  const updateSuggestions = ({title}) => {
    setSearchInput(initialHistoryList.filter((item) => item.title.toLowerCase().includes(title.toLowerCase())))
    setSuggestedInput(title)
  }

  const deleteItem = (id) => {
    setSearchInput(searchInput.filter((item) => item.id !== id))
  }


  return (
    <View style={{paddingTop: 50}}>
      <View style={{backgroundColor: 'blue', flexDirection: 'row', alignItems: 'center', paddingVertical: 8, justifyContent: 'space-around'}}>
      <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png'}} style={{height: 15, width: 60}} />
      <TextInput value={suggestedInput} onChangeText={enterText} style={{borderWidth: 1, width: 200, height: 40, borderRadius: 6,}} />
      </View>
      <View>
            <FlatList
             data={searchInput}
             renderItem={({item}) => (
               <HistoryItems browse={item} deleteItem={deleteItem} />
          )} />
      </View>
    </View>
  );
}
