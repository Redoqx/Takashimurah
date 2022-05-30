import{
    View, 
    Text,
    Dimensions,
    StyleSheet, ScrollView, Image, TouchableOpacity
} from 'react-native';
import Header from "./Header";
import React from "react";
// import ItemContainer from '../components/ItemContainter';
import color from '.././config/color';

const Wp2 = Dimensions.get('window').width/2;
const Hp2 = Dimensions.get('window').height/2;
const baseURL = `https://listproduk.herokuapp.com/produk`;
const windowsWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
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
        <View>
            <Header/>
            <ScrollView style={{paddingTop: 5}}>
                {/* <Text >Laptop</Text> */}
                <View style={Style.Item}>
                    {posts.map(post =>  (
                        <View name='area' style={Style.area} key= {post.id}>
                            <View name='container' style={Style.container}>
                                <View name='gambar' style={Style.gambar}>
                                    <Image 
                                        style={{height:150, width:150}}
                                        source={{uri:post.image}}
                                        />
                                </View>
                                <Text name="nama barang" numberOfLines={2}>
                                    {post.productName}
                                </Text>
                                <Text name='harga'>
                                    Rp. {post.price}
                                </Text>
                                <TouchableOpacity style={[{alignSelf:"flex-end", flexDirection:"row"}]} onPress={()=>navigation.navigate('Detail', {
                                                
                                                nama: post.productName,
                                                harga: post.price,
                                                rating: post.rating,
                                                image: post.image,
                                                spesifikasi: post.description,
                                                penjual:post.penjual
                                            })}>
                                            <Text>Detail</Text>
                                </TouchableOpacity>
                            </View>
                        </View>    
                    ))} 
                    </View>
                </ScrollView>    
        </View>
    )
}

const Style = StyleSheet.create({
    Item : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: "25%",
    },
    area:{
        width: Wp2,
        height: Hp2*0.7,
        // backgroundColor: '#eaeaea',
        alignItems: 'center',
        // display: 'flex',
        // flexDirection: 'row',

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
})


export default Home;