import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.heading}>Welcome to BanterBox </Text>
        <Text style={styles.lables}>Full name:</Text>
        <TextInput style={styles.input} placeholder="John Doe" />
        <Text style={styles.lables}>Email:</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" />
        <Text style={styles.lables}>Password:</Text>
        <TextInput style={styles.input} placeholder="*****" />
        <Text style={styles.lables}>Confirm password:</Text>
        <TextInput style={styles.input} placeholder="*****" />
        <Pressable style={styles.pressable}>
          <Text style={styles.register}>Register</Text>
        </Pressable>
        <Link style={styles.login} href={`/`}>
          already have an account? <Text style={styles.underline}>login</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    // justifyContent: 'center',
    alignItems: "center",
  },
  container: {
    marginTop: "20%",
    width: "85%",
  },
  heading: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#086e5a',
    paddingBottom: 10
  },
  lables: {
    fontSize: 18,
    paddingBottom: 5,
    fontWeight: 400,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 5,
  },
  pressable: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: 55,
    backgroundColor: "#086e5a",
    borderRadius: 10,
  },
  register: {
    fontWeight: 500,
    color: "white",
    fontSize: 20,
  },
  login: {
    fontSize: 15,
    paddingTop: 6,
    textAlign: 'center'
  },
  underline: {
    fontWeight: 500,
  },
});
