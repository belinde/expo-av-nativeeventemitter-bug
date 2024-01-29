import { Audio } from "expo-av";
import { useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const playSound = useCallback(async () => {
    const sound = await Audio.Sound.createAsync(require("./assets/beep.mp3"));
    await sound.sound.playAsync();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        A couple of warnings get logged as soon this View is rendered.
      </Text>
      <Text style={styles.text}>
        Another couple appears as long the playSound() callback is executed.
      </Text>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 10,
    margin: 50,
    textAlign: "center",
  },
  text: {
    textAlign: "center",
  },
});
