import { useFocusEffect } from "@react-navigation/native";
import cart from "@utils/cart";
import React, { useCallback, useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { Item } from "../SearchScreen/components/Item";
import { MainButton } from "@components/MainButton";
import { ButtonVariant } from "@components/MainButton/MainButton";
interface IItem {
  _id: string;
  name: string;
  barcode: number;
  price: number;
  description: string;
  qty?: number;
}
export const CartScreen = () => {
  const [items, setItems] = useState<IItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const getCartItems = async () => {
    const res = await cart.getCart();
    setItems(res.items);
    const price = res.items.reduce((acc, item) => {
      if (item.qty) {
        return acc + item.price * item.qty;
      } else {
        return acc + item.price;
      }
    }, 0);
    console.log(price)
    setTotalPrice(price)
  };



  useFocusEffect(
    useCallback(() => {
      getCartItems();
    }, [])
  );

    const handlePay = () => {
      Alert.alert('In progress')
    }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{flex: 1}}
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Item inCart item={item} refetch={getCartItems}/>}
      />
      <MainButton disabled={!items.length} title={`Оплатити ${totalPrice}грн`} variant={ButtonVariant.Primary} onPress={handlePay}/>
    </View>
  );
};
