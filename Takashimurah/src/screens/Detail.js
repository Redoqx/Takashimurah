import React  from 'react';
import { View, StyleSheet, Image, StatusBar, Text, ScrollView } from 'react-native';

import Product from '../../assets/Product.png'
import profilToko from '../../assets/profilToko.png'
import Header from './Header';

const Detail = () => {
    return (
        <ScrollView>
            <Header/>
        <View style={styles.container}>
            <View style={styles.body}>
            
                <View style={styles.product}>
                    <Image source={Product}
                    style={{width: 400, height:400}}
                    />
                </View>

                <View style={styles.price}>
                    <Text style={styles.priceText}>
                        Rp.999.999.999
                    </Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.descText}>
                        Laptop Asus 2021 Core i5 RAM 16GB / 8GB / 4GB / SSD 512GB  256GB / HDD 2TB / 1TB/ 500GB, 14”
                    </Text>
                </View>

                <View style={styles.wrap}>
                    <View style={styles.wrapTerjual}>
                        <View style={styles.textTerjual}>
                            <Text>Terjual</Text>
                        </View>
                        <View style={styles.countTerjual}>
                            <Text>21</Text>
                        </View>
                        
                    </View>
                    <View style={styles.wrapRating}>
                        <View style={styles.rating}>
                            <Text>4,8</Text>
                        </View>
                        <View style={styles.countRating}>
                            <Text>(14)</Text>
                        </View>
                    </View>

                    <View style={styles.wrapTestimoni}>
                        <View style={styles.testimoni}>
                            <Text>Foto Pembeli</Text>
                        </View>
                        <View style={styles.countTestimoni}>
                            <Text>(0)</Text>
                        </View>
                    </View>

                    <View style={styles.wrapDiskusi}>
                        <View style={styles.diskusi}>
                            <Text>Diskusi</Text>
                        </View>
                        <View style={styles.countDiskusi}>
                            <Text>(0)</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.wrapToko}>
                    <View style={styles.wrapTokolagi}>
                        <View>
                            <Image source={profilToko}
                            style={{width: 50, height: 50}}
                            />
                        </View>
                        <View style={styles.namaToko}>
                            <Text style={styles.namaText}>@asusofficial</Text>
                        </View>
                    </View>
                    
                    <View style={styles.followToko}>
                        <Text style={styles.followText}>+ Follow</Text>
                    </View>
                </View>

                <View style={styles.wrapDetail}>
                    <Text style={styles.titleDetail}>
                        Detail Produk
                    </Text>

                    <View style={styles.wrapDetaillagi}>
                        <View style={styles.aspek}>
                            <Text>Kondisi</Text>
                        </View>
                        <View style={styles.kondisi}>
                            <Text style={styles.kondisiText}>Baru</Text>
                        </View>
                    </View>

                    <View style={styles.wrapDetaillagi}>
                        <View style={styles.aspek}>
                            <Text>Min. Pemesanan</Text>
                        </View>
                        <View style={styles.kondisi}>
                            <Text style={styles.kondisiText}>1 Buah</Text>
                        </View>
                    </View>

                    <View style={styles.aspek}>
                        <Text>Laptop Asus 2021 Core i5 RAM 16GB / 8GB / 4GB / SSD 512GB  256GB / HDD 2TB / 1TB/ 500GB, 14..</Text>
                    </View>
                </View>

                <View style={styles.wrapShop}>
                    <View style={styles.chatShop}>
                        <Text style={styles.chatText}>Chat</Text>
                    </View>
                    <View style={styles.shop}>
                        <Text style={styles.shopText}>Beli Sekarang</Text>
                    </View> 
                    <View style={styles.cart}>
                        <Text style={styles.cartText}>+ Keranjang</Text>
                    </View>
                </View>

            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#F5F5F5',
        // marginTop: StatusBar.currentHeight || 0,
        alignItems : 'center',
    },
    // header: {
    //     backgroundColor : '#48696E',
    // },
    product: {
        backgroundColor: '#fff',
    },
    price: {
        padding: 10,
        backgroundColor: '#fff',
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    desc: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    descText: {
        fontSize: 20,
    },
    wrap: {
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        paddingLeft:15,
        paddingRight: 15,
        paddingBottom: 15,
        justifyContent: 'space-between',
    },
    wrapTerjual: {
        fontSize: 12,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 0,
    },
    textTerjual: {
        padding: 2,
    },
    countTerjual: {
        padding: 2,
    },
    wrapRating: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    rating: {
        padding: 2,
    },
    countRating: {
        padding: 2,
    },
    wrapTestimoni: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    testimoni: {
        padding: 2,
    },
    countTestimoni: {
        padding: 2,
    },
    wrapDiskusi: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    diskusi: {
        padding: 2,
    },
    countDiskusi: {
        padding: 2,
    },
    wrapToko:{
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    wrapTokolagi : {
        flexDirection : 'row',
        display: 'flex',
    },
    namaText : {
        fontWeight: 'bold',
        padding: 15,
        fontSize: 17,
    },
    followToko: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    followText: {
        padding: 10,
        fontWeight: 'bold',
    },
    wrapDetail : {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
    },

    wrapDetaillagi: {
        flexDirection: 'row',
        display: 'flex',
        borderBottomWidth: 1,
        borderColor: '#757575',
        justifyContent: 'space-between'
    },
    titleDetail :{
        fontWeight: 'bold',
        fontSize: 17,
    },
    aspek: {
        marginTop: 10,
    },
    kondisi: {
        marginTop: 10, 
    },
    kondisiText: {
      color: '#757575',  
    },
    wrapShop: {
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft:15,
        paddingRight: 15,
        paddingBottom: 15,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    chatShop: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    shop : {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
    },
    shopText: {
        paddingRight: 25,
        paddingLeft: 25,
        fontWeight: 'bold',
    },
    cart: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        backgroundColor: '#48696E',
    },
    cartText: {
        paddingRight: 25,
        paddingLeft: 25,
        color: '#fff',
        fontWeight: 'bold',

    }


    


})

export default Detail;