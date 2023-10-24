import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import CustomApiHook from "./CustomApiHook";
import * as Animatable from "react-native-animatable";

const ApiComponent = () => {
  const { bitcoinData } = CustomApiHook(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bitcoin Live Price Today</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={Object.entries(bitcoinData)}
          keyExtractor={(item) => item[0]}
          renderItem={({ item }) => (
            <Animatable.View
              animation="fadeInUpBig"
              duration={1000}
              style={styles.priceItem}
            >
              <Text style={styles.itemHeading}>
                {item[0]}: {item[1].rate}
              </Text>
              <Text style={styles.itemText}>{item[1].description}</Text>
            </Animatable.View>
          )}
        />
      </View>
    </View>
  );
};

export default ApiComponent;

const styles = StyleSheet.create({
  titleContainer: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  listContainer: { flex: 0.8 },
  priceItem: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#333333",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  itemHeading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 16,
    color: "#FFA500",
  },
});
