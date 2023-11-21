import React, { FC, useState } from 'react';
import { FlatList, Image, Platform, Pressable, StyleSheet } from 'react-native';

interface EmojiListProps {
  handleSelect: (item: any) => void;
  close: () => void;
}

export const EmojiList: FC<EmojiListProps> = ({ close, handleSelect }) => {
  const [emoji] = useState([
    require('../../assets/images/emoji1.png'),
    require('../../assets/images/emoji2.png'),
    require('../../assets/images/emoji3.png'),
    require('../../assets/images/emoji4.png'),
    require('../../assets/images/emoji5.png'),
    require('../../assets/images/emoji6.png'),
  ]);

  const handleEmojiPress = (item: any) => {
    handleSelect(item);
    close();
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => handleEmojiPress(item)}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
