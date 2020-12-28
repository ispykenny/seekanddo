import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Text, ImageBackground, StatusBar, Linking, ScrollView, SafeAreaView } from 'react-native';
import Beach from '../Components/Beach';
import Inner from '../Components/Inner';
import ImageSlider from 'react-native-image-slider';
import ChcekMark from '../Assets/Check';

const SingleView = ({singleShowing, setSingleShowing, singleViewData, setSingleViewData}) => {
  // const closeSingleView = () =
  const [backgroundImage, setBackgroundImage] = useState('')

  useEffect(() => {
    let image = singleViewData.fields.locationImage.fields.file.url
    if(image.length > 1) {
      setBackgroundImage(image)
    } else {
      setBackgroundImage('')
    }

  },[])

  const supportedURL = "https://www.google.com/maps/dir/33.4858411,-117.1147092/la+jolla+shores/@33.1613522,-117.4435152,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80dc0152f304cdc9:0xf86a9dbe70028681!2m2!1d-117.2574626!2d32.8570992";



const setUpSlider = () => {
  if(singleViewData.fields.hasGallery !== true) return;
  let images = [];
  let fetchedImages = singleViewData.fields.gallery;
  fetchedImages.forEach((img) => {
    images.push(`https:${img.fields.file.url}`)
  })
  return images;
}


const SetUpList = () => {
  if(singleViewData.fields.list) {
    let listItems = singleViewData.fields.list.split(',')
    return (
      <View style={styles.listView}>
        {listItems.map((item) => (
          <View style={styles.listView__item}>
            <ChcekMark/>
            <Text style={{marginLeft: 6}}>{item.trim()}</Text>
          </View>
        ))}
      </View>
    )
  } else {
    return null;
  }
}


const OpenURLButton = ({ url, children }) => {
  console.log(url, children)
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <View style={styles.buttonParent}>
      { singleViewData.fields.category !== "beach" ? (
        <>
          <View style={styles.button}>  
            <Text style={{color : 'white', textAlign: 'center'}} title={children} onPress={handlePress}>Menu</Text>
          </View>
          <View style={styles.button}>  
            <Text style={{color : 'white', textAlign: 'center'}} title={children} onPress={handlePress}>Call us</Text>
          </View>
        </>
      ) : null }

      <View style={styles.button}>  
        <Text style={{color : 'white', textAlign: 'center'}} title={children} onPress={handlePress}>Get Directions</Text>
      </View>
    </View>
  );
};

  const SingleViewPage = () => {
    return (
      <>
      
      <View style={{marginBottom : 20}}>
        <Text style={[styles.textWhite, styles.title]}>
          {singleViewData.fields.locationTitle}
        </Text>
        <View style={{marginTop : 20}}>
          {singleViewData.fields.category == "beach" ? (
            <Beach/>
          ) : null}
        </View>
        <View style={{marginTop: 20}}>
          <Text style={[styles.textWhite, styles.content]}>This is some random stuff about this location that we can put here below the title. Not sure what else we can write, but here it goes!</Text>
        </View>
        <View>
          <SetUpList/>
        </View>
        <View style={{height: 200, marginTop: 20}}>
        {singleViewData.fields.hasGallery === true ? (
          <ImageSlider images={setUpSlider()}/>
        ) : null}
        </View>
      </View>
      </>
    )
  }

  return (
    <>
      <View style={styles.singleView}>
      <StatusBar barStyle="light-content" />
      <ImageBackground style={styles.fullWidthBackground} source={{uri : `https:${backgroundImage}`}}>
      <View style={styles.overlay}>
          <Inner>
          <Text style={[styles.textWhite, {color: 'white', top: 80}]} onPress={() => setSingleShowing(!singleShowing)}>Go Back</Text>
          </Inner>
        </View>
      </ImageBackground>
        <SafeAreaView>
          <ScrollView style={{paddingVertical: 30}}>
          <View style={{top: 0}}>
          <Inner>
            <SingleViewPage/>
          </Inner>
        </View>
          </ScrollView>
        </SafeAreaView>
    </View>
    <OpenURLButton url={supportedURL}>Get Directions</OpenURLButton>

    </>
  )
}

const styles = StyleSheet.create({
  singleView: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    // top: 0,
    backgroundColor: 'white'
  },
  fullWidthBackground: {
    width: '100%', height: 210,position: 'relative',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(000, 000, 000, 0.3)'
  },
  buttonParent: {
    width: '90%',
    position: 'absolute',
    bottom: 10,
    left: '5%',
  },
  button: {
    backgroundColor: "#205DBF",
    paddingVertical: 20,
    marginBottom: 10
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  content: {
    lineHeight: 25
  },
  textWhite: {
    color: "black",
  },
  listView: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  listView__item: {
    width: '50%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default SingleView;