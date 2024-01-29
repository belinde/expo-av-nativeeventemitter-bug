# Minimal reproducible example for a expo-av bug report

All the relevant code is in the `App.js` file.

The project has been generated as per standard procedure, then `expo-av` is added with `expo install`

```
npx create-expo-app expo-av-nativeeventemitter-bug
npx expo install expo-av
```

The relevant part of the code is simply:

```javascript
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
      /* omissis */
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}
/* omissis */
```

As long the App is loaded, a couple of warings appears:

```
 WARN  `new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method.
 WARN  `new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method.
```

Whenever the Sound is played, another couple of the same warnings is displayed.
