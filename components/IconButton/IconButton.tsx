import { Pressable, StyleSheet, Text, PressableProps } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FC } from 'react';

interface IconButtonProps extends PressableProps {
  icon: string;
  label: string;
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  label,
  ...restProps
}) => {
  return (
    <Pressable style={styles.iconButton} {...restProps}>
      <MaterialIcons name={icon as any} size={24} color='#fff' />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
