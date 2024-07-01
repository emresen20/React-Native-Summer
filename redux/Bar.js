import React from 'react'
import { View,Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Buttons } from './Buttons'
import { setAuthor } from './Slice'

const Bar = () => {
    const author=useSelector(state=>state.counter)
    const dispatch=useDispatch()
    React.useEffect(()=>{
        console.log(author)
    },[])
  return (
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text>Name: {author.author.name}</Text>
      <Text>Surname: {author.author.surname}</Text>
      <Buttons text={"change"} onPress={()=> dispatch(setAuthor({
        name:"Berna",
        surname:"Varol"
      }))}/>
    </View>
  )
}

export default Bar
