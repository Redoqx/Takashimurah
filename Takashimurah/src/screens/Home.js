import{
    View, Text,
} from 'react-native';
import Header from "./Header";
import { useEffect, useState } from 'react';

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
            <Text >{products.map(product => product.nama)}</Text>
            
        </View>
    )
}

export default Home;