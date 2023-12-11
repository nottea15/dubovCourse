import { SearchBar } from "@components/SearchBar";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./SearchScreen.styles";
import Camera from "@assets/icons/camera.svg";
import { useNavigation } from "@react-navigation/native";
import { API } from "@utils/api";
import { Item } from "./components/Item";

type Item = {
  _id: string;
  name: string;
  barcode: number;
  price: number;
  description: string;
};

export const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getItems = async () => {
      const response = await API.get("/items");
      console.log(response.data, "response");
      setItems(response.data);
    };
    getItems();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [items, searchValue]);
  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar value={searchValue} onChange={setSearchValue}/>
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() => navigation.navigate("BarcodeScanner" as never)}
        >
          <Camera width={24} height={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={filteredItems}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};
