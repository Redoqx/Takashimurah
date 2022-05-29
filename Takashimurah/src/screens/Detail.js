import React  from 'react';
import { View, StyleSheet, Image, StatusBar, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import color from '../config/color';
import { useState } from 'react';

import Product from '../../assets/Product.png'
import profilToko from '../../assets/profilToko.png'
import Header from './Header';

const Detail = ({route}) => {
    const [postNama, setpostNama] = useState(route.params.nama);
    const [postPrice, setpostPrice] = useState(route.params.harga);
    const [postRating, setpostRating] = useState(route.params.rating);
    const [postImage, setpostImage] = useState(route.params.image);
    const [postSpesifikasi, setpostSpesifikasi] = useState(route.params.spesifikasi);
    const [postPenjual, setpostPenjual] = useState(route.params.penjual);
    return (
        <View >
        <Header/>
        <ScrollView>
            
        <View style={styles.container}>
            <View style={styles.body}>
            
                <View style={styles.product}>
                    <Image source={{uri:postImage}}
                    style={styles.imgProduct}
                    />
                </View>

                <View style={styles.price}>
                    <Text style={styles.priceText}>
                        Rp.{postPrice}
                    </Text>
                </View>
                <View style={styles.desc}>
                    <Text style={styles.descText}>
                        {postNama}
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
                        <Feather name="star" size={19} color={color.starColor}/>
                        <View style={styles.rating}>
                            <Text>{postRating}</Text>
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
                            <Text style={styles.namaText}>{postPenjual}</Text>
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
                        <Text>{postSpesifikasi}</Text>
                    </View>
                </View>

                <View style={styles.wrapShop}>
                    <View style={styles.chatShop}>
                        <Feather name="message-square" size={19} color={color.headerFooterColor}/>
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#F5F5F5',
        marginTop: StatusBar.currentHeight || 0,
        alignItems : 'center',
        width: "100%",
    },
    body: {
        paddingHorizontal: "8%",
    },
    imgProduct: {
        width:400,
        height:400,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
    },
    product: {
        backgroundColor: '#fff',
    },
    price: {
        padding: 10,
        backgroundColor: '#fff',
        
    },
    priceText: {
        fontWeight: 'bold',
        fontSize: 20,
        width:"50%",
    },
    desc: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: '#fff',
    },
    descText: {
        fontSize: 15,
        width:"100%",
    },
    wrap: {
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        paddingLeft:15,
        paddingRight: 15,
        paddingBottom: 15,
        justifyContent: 'space-between',
        width: "100%",
    },
    wrapTerjual: {
        fontSize: 12,
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 0,
        width: "23%"
        
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
        borderRadius: 10,
        width: "23%",
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 10,
        width: "23%",
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 10,
        width: "23%",
        justifyContent: 'center',
        alignItems: 'center',
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
        width: "100%",
    },
    wrapTokolagi : {
        flexDirection : 'row',
        display: 'flex',
        width: "50%",
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 15,
        justifyContent: 'space-between',
        marginTop: 10,
        width: "100%",
    },
    chatShop: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: "20%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    shop : {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: "35%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopText: {
        fontWeight: 'bold',
    },
    cart: {
        borderWidth: 1,
        fontSize: 12,
        flexDirection: 'row',
        borderRadius: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#48696E',
        width: "35%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default Detail;