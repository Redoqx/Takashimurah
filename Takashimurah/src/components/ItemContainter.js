import{
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import color from '../config/color';

const path = "/home/redoqx/Takashimurah/Takashimurah/src/data/img/asus-zenbook-flip-s.jpg";
const Wp2 = Dimensions.get('window').width/2;
const Hp2 = Dimensions.get('window').height/2;
const ItemContainer = () => {
    return(
        <View name='area' style={Style.area}>
            <View name='container' style={Style.container}>
                <View name='gambar' style={Style.gambar}>
                    {/* <Image source={require(path)} style={Style.gambarnya} /> */}
                </View>
                <Text name="nama barang">

                </Text>
                <Text name='harga'>

                </Text>
            </View>
        </View>
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