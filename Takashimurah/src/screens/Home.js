import{
    View, Text
} from 'react-native';
import Header from "./Header";

const Home = ({navigation}) => {
    return(
        <View>
            <Header/>
            <Text onPress={()=>navigation.navigate('Detail')}>Laptop</Text>
        </View>
    )
}

export default Home;