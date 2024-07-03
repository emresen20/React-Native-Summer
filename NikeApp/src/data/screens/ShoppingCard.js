import React from 'react'
import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from 'react-native'
import card from '../card'
import CartListItem from '../components/CartListItem'


 const ShoppingCardTotals = () => (
  <View style={styles.totalsContainer}>

    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>410</Text>
    </View>

    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>410</Text>
    </View>
  </View>

 );

const ShoppingCard = () => {
  return (
    <>

      <FlatList data={card} renderItem={({ item }) => <CartListItem cartItem={item} />}

        //Bu özellik, listenin en üstüne sabit bir bileşen eklemek istediğinizde kullanışlıdır
        ListFooterComponent={ShoppingCardTotals}

      />
      <Pressable style={styles.button} >
        <Text style={styles.buttontext}>CheckOut</Text>
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
