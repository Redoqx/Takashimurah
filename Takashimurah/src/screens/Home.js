import{
    View, 
    Text,
    Dimensions,
    StyleSheet,
} from 'react-native';
import Header from "./Header";
import ItemContainer from '../components/ItemContainter';
import { useEffect, useState } from 'react';

const windowsWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://192.168.18.10:19002/product_list',{
            method:'GET'
        })
        .then((res)=> res.json())
        .then((products)=>{
            setProducts(products) 
        })
        .catch (function(error){
            throw error;
        })
    }, [])
    return(
        <View>
            <Header/>
            <Text onPress={()=>navigation.navigate('Detail')}>Laptop</Text>
            {/* <Text >{products.map(product => product.nama)}</Text> */}
            <ItemContainer/>
            
        </View>
    )
}

const Style = StyleSheet.create({
    Item : {

    }
})


export default Home;