
import {View, Text, Image, TouchableOpacity} from 'react-native'

const HistoryItems = ({browse, deleteItem}) => {

const deleteButton = () => {
    deleteItem(browse.id)
}

  return (
    <TouchableOpacity onPress={deleteButton} style={{flexDirection: 'row', justifyContent: 'start', alignItems: 'center', paddingVertical: 25, flexGrow: 1}}>
      <Text style={{fontSize: 12, paddingLeft: 14}}>{browse.timeAccessed}</Text>
      <Image source={{uri: browse.logoUrl}} style={{height:19, width: 19, marginLeft: 20}}/>
      <Text style={{paddingLeft: 20, width: 270,}}>{browse.title}</Text>
      <Image source={{uri: 'https://assets.ccbp.in/frontend/react-js/delete-img.png'}} style={{height:19,   width: 19, marginHorizontal: 10}}/>
    </TouchableOpacity>
  )
}

export default HistoryItems

    // id: 9,
    // timeAccessed: '09:00 AM',
    // logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    // title: 'Google',
    // domainUrl: 'google.com',