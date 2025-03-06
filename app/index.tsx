import BanterBoxLogo from "@/components/ui/logo";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Login to </Text>
          <BanterBoxLogo fontSize={25} />
        </View>
        <Text style={styles.lables}>Email:</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" />
        <Text style={styles.lables}>Password:</Text>
        <TextInput style={styles.input} placeholder="*****" />
        <Link style={styles.forgottenPassword} href={`/register`}>
          forgotten password?
        </Link>
        <Pressable style={styles.pressable}>
          <Text style={styles.login}>Login</Text>
        </Pressable>
      </View>
      <Link style={styles.register} href={`/register`}>
        don't have an account? <Text style={styles.underline}>Register</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    marginTop: "40%",
    // justifyContent: "",
    alignItems: "center",
    margin: "auto",
  },
  container: {
    width: "85%",
    height: "auto",
  },
  logo: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#086e5a",
    fontWeight: "bold",
    fontSize: 25,
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
  forgottenPassword: {
    paddingTop: 0,
    paddingBottom: 8,
    color: '#086e5a',
    fontSize: 16,
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
  login: {
    fontWeight: 500,
    color: "white",
    fontSize: 20,
  },
  register: {
    fontSize: 15,
    paddingTop: 6,
  },
  underline: {
    fontWeight: 500,
  },
});
