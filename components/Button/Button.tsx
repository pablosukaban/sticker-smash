import { FC } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Pressable, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  label: string;
  theme?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({ label, theme = 'secondary' }) => {
  //   if (theme === 'primary') {
  //     return <View></View>;
  //   }

  return (
    <View
      style={[
        styles.buttonContainer,
        theme === 'primary' && styles.buttonContainerPrimary,
      ]}
    >
      <Pressable
        onPress={() => alert('Pressed')}
        style={[styles.button, theme === 'primary' && styles.buttonPrimary]}
      >
        {theme === 'primary' && (
          <FontAwesome
            name='picture-o'
            size={18}
            color={'#25292e'}
            style={styles.buttonIcon}
          />
        )}
        <Text
          style={[
            styles.buttonLabel,
            theme === 'primary' && styles.buttonLabelPrimary,
          ]}
        >
          {label}
        </Text>
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
  buttonContainerPrimary: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonPrimary: {
    backgroundColor: '#fff',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
  buttonLabelPrimary: {
    color: '#25292e',
  },
  buttonIcon: {
    paddingRight: 8,
  },
});
