import { useUser } from "@clerk/clerk-expo";
import { Link, Redirect, useRootNavigationState } from "expo-router";
import { useEffect } from "react";
import { Pressable, StyleSheet, Text, View, ActivityIndicator } from "react-native";

export default function Index() {
  const { user, isLoaded } = useUser();

  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    CheckNavLoaded();
  }, []);

  const CheckNavLoaded = () => {
    if (!rootNavigationState.key) return null;
  };

  if (!isLoaded) {
    // Kullanıcı verileri yüklenirken bir yüklenme animasyonu gösterebilirsiniz
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {user ? (
        <Redirect href="/(tabs)/home" />
      ) : (
        <Redirect href="/login" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
