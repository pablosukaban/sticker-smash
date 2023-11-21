import React, { FC } from 'react';
import { Image, View, ImageProps } from 'react-native';

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageProps['source'];
}

export const EmojiSticker: FC<EmojiStickerProps> = ({
  imageSize,
  stickerSource,
}) => {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        resizeMode='contain'
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
};
