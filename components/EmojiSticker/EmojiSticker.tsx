import React, { FC } from 'react';
import { Image, View, ImageProps } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface EmojiStickerProps {
  imageSize: number;
  stickerSource: ImageProps['source'];
}

export const EmojiSticker: FC<EmojiStickerProps> = ({
  imageSize,
  stickerSource,
}) => {
  const scaleImage = useSharedValue(imageSize);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  return (
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode='contain'
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </View>
  );
};
