import { FC } from 'react';

import { View, Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
}

export const Button: FC<ButtonProps> = ({ label }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => alert('Pressed')} style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
