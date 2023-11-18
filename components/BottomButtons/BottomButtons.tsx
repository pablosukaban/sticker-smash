import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
} from 'react-native';
import { CircleButton } from '../CircleButton';
import { IconButton } from '../IconButton/IconButton';

export const BottomButtons = () => {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
          <IconButton icon={'refresh'} label={'Reset'} />
          <CircleButton onPress={() => alert('yo')} />
          <IconButton icon={'save-alt'} label={'Save'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...previous styles remain unchanged
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
