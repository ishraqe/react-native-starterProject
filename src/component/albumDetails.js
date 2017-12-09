import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import Card from './card';
import CardSection from "./CardSection";
import Button from './button'

const AlbumDetail = ({data}) => {
  const {title, artist, thumbnail_image,image, url} = data;

  return (
    <Card>
        <CardSection>
            <View style={styles.thumbContainerStyle}>
                <Image  style={styles.thumbContentStyle} source={{uri: thumbnail_image}} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerText}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>

        <CardSection>
            <Image style={styles.imageStyle} source={{uri: image}}/>
        </CardSection>
        <CardSection>
            <Button onPress={()=> Linking.openURL(url)}/>
        </CardSection>
    </Card>
  );
};

const styles={
    thumbContainerStyle:{
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 10,
     marginRight:10
    },
    thumbContentStyle:{
        height: 50,
        width: 50
    },
    headerContentStyle:{
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText:{
        fontSize:18
    },
    imageStyle:{
        height:300,
        flex:1,
        width: null
    }
};
export default AlbumDetail;
