import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.wrapper}>
        <ThemedText style={styles.textStyle}>Hello Index page</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  wrapper: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    backgroundColor: 'transparent',
  },
  textStyle: {
    color: 'red',
    fontSize: 40,
    textAlign: 'center',
    paddingTop: 20,
    margin: 'auto',
  },
});
