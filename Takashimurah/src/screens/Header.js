import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Platform,
    StatusBar,
    TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import color from '../config/color'
import statusBarHandler from '../components/statusBarHandler';

const Header = () =>{
    return(
        <View>
            <statusBarHandler/>
            <View style={styles.header}>
                <View style={styles.headerItemContainer}>
                    <View style={styles.search}>
                        <View style={{margin: 5}}>
                            <Feather name="search" size={24} color={color.iconColor}/>
                        </View>
                        <TextInput style={{color: color.iconColor, fontWeight:"bold", fontSize: 16}} />
                    </View>
                    <View>
                        <Feather name="share-2" size={25} color={color.iconColor}/>
                    </View>
                    <View>
                        <Feather name="shopping-cart" size={25} color={color.iconColor}/>
                    </View>
                    <View>
                        <Feather name="menu" size={25} color={color.iconColor}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: color.headerFooterColor,
        height: 60,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center"
    },
    headerItemContainer:{
        marginHorizontal: 10,
        marginVertical: 10,
        height: 40,
        width: "90%",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    search:{
        height: "100%",
        width: "70%",
        borderColor: color.iconColor,
        borderRadius: 10,
        borderWidth: 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})

export default Header;