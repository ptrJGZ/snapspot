import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { getClient, getPhotographers } from "@/services/firestore/users";

export default function Index() {
  const [photographers, setPhotographers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await getClient();
      setCurrentUser(response);
    };

    const fetchPhotographers = async () => {
      const response = await getPhotographers();
      setPhotographers(response);
    };

    fetchCurrentUser();
    fetchPhotographers();
  }, []);

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
          coordinate={{
            latitude: currentUser.location.latitude,
            longitude: currentUser.location.longitude,
          }}
          title={currentUser.name}
        />
        {photographers.map((photographer) => (
          <Marker
            key={photographer.id}
            title={photographer.name}
            coordinate={{
              latitude: photographer.location.latitude,
              longitude: photographer.location.longitude,
            }}
          />
        ))}
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
