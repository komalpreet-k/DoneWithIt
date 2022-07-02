
import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import ListItem from '../components/ListItem'

const messages= [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/icon.png')
    },
    {
        id: 2,
        title: 'T2',
        description: '2',
        image: require('../assets/icon.png')
    }
]
export default function MessagesScreen() {
  return (
<SafeAreaView>
    <FlatList
    data={messages}
    keyExtractor= {message => message.id.toString()}
    renderItem= {({item}) => <ListItem
    title= {item.title}
    subTitle= {item.description}
    image={item.image}
    />}
    />
</SafeAreaView>
  )
}
