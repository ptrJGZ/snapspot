import React from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 25.765652,
          longitude: -80.194665,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{ latitude: 25.765652, longitude: -80.194665 }}
          title="Me"
        />
        <Marker
          coordinate={{ latitude: 25.767652, longitude: -80.194665 }}
          title="Photographer 1"
        ></Marker>
        <Marker
          coordinate={{ latitude: 25.763652, longitude: -80.192665 }}
          title="Photographer 2"
        />
        <Marker
          coordinate={{ latitude: 25.763652, longitude: -80.196665 }}
          title="Photographer 3"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
