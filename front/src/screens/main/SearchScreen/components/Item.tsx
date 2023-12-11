import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./Item.styles";
import cart from "@utils/cart";
import { colors } from "@constants/colors";

interface IItem {
  _id: string;
  name: string;
  barcode: number;
  price: number;
  description: string;
  qty?: number;
}

interface IProps {
  item: IItem;
  inCart?: boolean;
  refetch?: () => void;
}

export const Item: React.FC<IProps> = ({ item, inCart, refetch }) => {
  const addToCart = async () => {
    const response = await cart.addToCart(item.barcode);
    console.log(response, "scanned");
    refetch && refetch();
  };

  const reduceQty = async () => {
    const response = await cart.reduceQuantity(item._id);
    refetch && refetch();
  };

  const removeFromCart = async () => {
    await cart.removeFromCart(item._id);
    refetch && refetch();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.description}</Text>
      <View style={styles.flexRow}>
        <Text style={styles.price}>
          {item.qty ? item.price * item.qty : item.price} грн{" "}
          {item.qty && `(x${item.qty})`}
        </Text>
        {inCart && (
          <View style={{flexDirection: 'row', gap: 5}}>
            <TouchableOpacity style={styles.qtyBtn} onPress={addToCart} >
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.qtyBtn} onPress={reduceQty} disabled={!item.qty}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={[styles.btn, inCart && { backgroundColor: colors.red }]}
          onPress={inCart ? removeFromCart : addToCart}
        >
          <Text style={[styles.btntxt, inCart && { color: colors.white }]}>
            {inCart ? "Видалити з корзини" : "Додати в корзину"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
