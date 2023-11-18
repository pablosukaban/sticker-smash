import { StyleSheet, Text, View, Image } from 'react-native';

import { FC } from 'react';

interface ImageViewerProps {
  placeholderImageSource: any;
  selectedImage: string | null;
}

export const ImageViewer: FC<ImageViewerProps> = ({
  placeholderImageSource,
  selectedImage,
}) => {
  const source = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={source} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
