import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen () {
    return (
        <ThemedView style={style.screenWrapper}>
            <ThemedView>
                <Text>Hello HomeScreen</Text>
            </ThemedView>
        </ThemedView>
    )
}
const style = StyleSheet.create({
    screenWrapper: {
        backgroundColor: 'red',
    }
});