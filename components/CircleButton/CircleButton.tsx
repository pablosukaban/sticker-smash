import { FC } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
} from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CircleButtonProps extends PressableProps {}

export const CircleButton: FC<CircleButtonProps> = (props) => {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable {...props} style={styles.circleButton}>
        <MaterialIcons name='add' size={38} color='#25292e' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});
