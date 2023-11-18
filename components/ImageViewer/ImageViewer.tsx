import { StyleSheet, Text, View, Image } from 'react-native';

import { FC } from 'react';

interface ImageViewerProps {
  placeholderImageSource: any;
}

export const ImageViewer: FC<ImageViewerProps> = ({
  placeholderImageSource,
}) => {
  return <Image source={placeholderImageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
