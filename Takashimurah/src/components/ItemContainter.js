import{
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions, ScrollView, TouchableOpacity
} from 'react-native';
import React from "react";
import color from '../config/color';

const path = "/home/redoqx/Takashimurah/Takashimurah/src/data/img/asus-zenbook-flip-s.jpg";
const Wp2 = Dimensions.get('window').width/2;
const Hp2 = Dimensions.get('window').height/2;
const baseURL = `https://listproduk.herokuapp.com/produk`;

const ItemContainer = ({navigation}) => {
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        fetch(baseURL,{method:'GET'})
        .then((response) => response.json())
        .then((posts)=>{
          setPosts(posts);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          else if (error.request) {
            console.log(error.request);
          }else {
            console.log("Error", error.message);
          }
        });
      }, []);
    
      if (!posts) return null;
    return(
        <ScrollView style={{marginTop: 50}}>
        {posts.map(post =>  (
            <View name='area' style={Style.area} key= {post.id}>
                <View name='container' style={Style.container}>
                    <View name='gambar' style={Style.gambar}>
                    <Image 
                        style={{height:150, width:150}}
                        source={{uri:post.image}}
                        />
                    </View>
                    <Text name="nama barang">
                        {post.productName}
                    </Text>
                    <Text name='harga'>
                        Rp. {post.price}
                    </Text>
                    <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('Detail')}>
                                <Text>Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
        
        
        )} 
        
          </ScrollView>

        
    )
}

const Style = StyleSheet.create({
    area:{
        width: Wp2,
        height: Hp2*0.7,
        // backgroundColor: '#eaeaea',
        alignItems: 'center'
    },
    container:{
        margin: 10,
        flex: 1,
        width: Wp2-20,
        backgroundColor: color.panelColor,
        // backgroundColor: '#ea2132',
        borderRadius: 10,
        alignItems: 'center'
    },
    gambar: {
        backgroundColor: 'white',
        margin: 10,
        width: Wp2-40,
        height: Hp2*0.7*0.5,
        borderRadius: 10,
    },
    // gambarnya:{
    //     width:Wp2-40,
    //     resizeMode: 'cover'
    // }

})

export default ItemContainer;