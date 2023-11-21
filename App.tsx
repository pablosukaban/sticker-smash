import * as ImagePicker from 'expo-image-picker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './components/Button';
import { CircleButton } from './components/CircleButton';
import { IconButton } from './components/IconButton/IconButton';
import { ImageViewer } from './components/ImageViewer';
import { EmojiPicker } from './components/EmojiPicker';

const PlaceHolderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAppOptionsShown, setIsAppOptionsShown] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setSelectedImage(imageUri);
      setIsAppOptionsShown(true);
    } else {
      alert('You did not select a photo');
    }
  };

  const reset = () => {
    setIsAppOptionsShown(false);
  };

  const addSticker = () => {
    // we will implement this later
    setIsModalVisible(true);
  };

  const saveImageAsync = async () => {
    // we will implement this later
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      {isAppOptionsShown ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={'refresh'} label={'Reset'} onPress={reset} />
            <CircleButton onPress={addSticker} />
            <IconButton
              icon={'save-alt'}
              label={'Save'}
              onPress={saveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            onPress={pickImageAsync}
            label='Choose a photo'
            theme='primary'
          />
          <Button
            label='Use this photo'
            onPress={() => setIsAppOptionsShown(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} close={handleCloseModal}>
        {''}
      </EmojiPicker>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
