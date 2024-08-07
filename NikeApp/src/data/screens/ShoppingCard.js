import React, { useState } from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable, Modal, TouchableOpacity } from 'react-native'
import card from '../card'
import CartListItem from '../components/CartListItem'
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubtotal, selectTotal } from '../../store/cardSlices';


 const ShoppingCardTotals = ({ setOpenModal }) => {
  const subtotal = useSelector(selectSubtotal)
  const total = useSelector(selectTotal)

  const deliveryFee= useSelector(selectDeliveryPrice);

 

  

  return(

  <View style={styles.totalsContainer}>
    

    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>{subtotal}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>{deliveryFee}</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>{total}</Text>
    </View>
  </View>

 )};

const ShoppingCard = () => {
  const [openModal,setOpenModal]= useState(false);
  const carItems=useSelector(state => state.cart.items)
  const totals= useSelector(selectTotal)

  const ThxModal= ()=>{
    return(
      <Modal visible={openModal} transparent={true} animationType="slide">
        <View style={{height:200,width:300,backgroundColor:"orange",justifyContent:"center",alignItems:"center", alignSelf:"center",marginTop:350}}>
        <Text>Thanks For Shopping</Text>
        <TouchableOpacity onPress={()=> setOpenModal(false)}>
          <Text>Close</Text>
        </TouchableOpacity>
        
      </View>
      </Modal>
      
    )
  }
  return (
    <>

      <FlatList data={carItems} renderItem={({ item }) => <CartListItem cartItem={item} />}

        //Bu özellik, listenin en üstüne sabit bir bileşen eklemek istediğinizde kullanışlıdır
        ListFooterComponent={ShoppingCardTotals}

      />
      <ThxModal/>
      <Pressable style={styles.button} >
        <Text style={styles.buttontext} onPress={()=> setOpenModal(true)}>CheckOut</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 15,
    paddingTop: 10,
    borderColor: "gray",
    borderTopWidth: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2
  },
  text: {
    color: "gray"
  },
  textBold: {
    fontWeight: '500',

  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: '90%',
    alignSelf: "center",
    padding: 17,
    borderRadius: 100,
    alignItems: "center"

  },
  buttontext: {
    color: "white",
    fontWeight: '500',
    fontSize: 16
  }
})

export default ShoppingCard
