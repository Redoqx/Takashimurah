import React  from 'react';
import { View, StyleSheet, Image, StatusBar, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import color from '../config/color';

import profilToko from '../../assets/profilToko.png'

const Profil = () => {
    return (
        <ScrollView>
            {/* <Header/> */}
                <View style={styles.container}>

                    <View style = {styles.head}>
                        <Text style= {styles.headText}>Profil Anda </Text>
                    </View>

                    <View style = {styles.wrap}>
                        <View style= {styles.wrapProfillagi}>
                            <View>
                                <Image source={profilToko}
                                style={{width: 50, height: 50}}
                                />
                            </View>
                            <View>
                                <Text style={styles.namaText}>Sophia Nouriska</Text>
                            </View>
                        </View>
                        <View style={styles.iconSetting}>
                            <Feather name="settings" size={25} color={color.blackColor}/>
                        </View>
                    </View>

                    <View style={styles.wrap}>
                        <View style={styles.wrapBawahlagi}>
                            <View style={styles.bawahprofil}>
                                <Text>Buka Toko Gratis</Text>
                            </View>
                            <Feather name="chevron-right" size={25} color={color.blackColor}/>
                            
                        </View>
                       
                        <View style={styles.wrapBawahlagi}>
                            <View style={styles.bawahprofil}>
                                <Text>Daftar Affiliate</Text>
                            </View>
                            <Feather name="chevron-right" size={25} color={color.blackColor}/>
                        </View>
                    </View>
                    
                    {/* body bawah : aktivitas saya */}
                    <View style = {styles.bodyBawah}>
                        <View style = {styles.subJudul}>
                            <Text style = {styles.subJudulText}>Aktivitas Saya</Text>
                        </View>    

                        <View style = {styles.wrapBody}>
                            <Feather name="book" size={19} color={color.blackColor}/>
                            <Text style = {styles.text}> Daftar Transaksi </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="heart" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Wishlist </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="star" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Ulasan </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="user-plus" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Toko yang Di-follow </Text>
                        </View>

                        {/* body bawah : semua kategori */}
                        <View style = {styles.subJudul}>
                            <Text style = {styles.subJudulText}>Semua Kategori</Text>
                        </View> 

                        <View style = {styles.wrapBody}>
                            <Feather name="shopping-bag" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Kategori </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="clipboard" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Top-Up & Tagihan </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="send" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Travel & Entertainment </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="dollar-sign" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Keuangan </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="more-horizontal" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Layanan Lainnya </Text>
                        </View>

                        {/* body bawah : pusat bantuan */}
                        <View style = {styles.subJudul}>
                            <Text style = {styles.subJudulText}>Pusat Bantuan</Text>
                        </View> 

                        <View style = {styles.wrapBody}>
                            <Feather name="user-x" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Pesanan Dikomplain </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="headphones" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Bantuan Tokopedia Care </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="file-text" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Ketentuan & Kebijakan Privasi </Text>
                        </View>

                        <View style = {styles.wrapBody}>
                            <Feather name="info" size={19} color={color.blackColor}/>
                            <Text style = {styles.text} > Info Aplikasi </Text>
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
        marginTop: StatusBar.currentHeight || 0,
        alignItems : 'center',
        width: "100%",
        height: "100%"
    },
    head : {
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 0,
        width: "100%"
    },
    headText : {
        fontSize: 20,
        fontWeight: 'bold'
    },
    wrap:{
        flexDirection : 'row',
        display: 'flex',
        backgroundColor: '#fff',
        padding: 15,
        paddingBottom: 0,
        justifyContent: 'space-between',
        width: "100%"
    },
    wrapProfillagi : {
        flexDirection : 'row',
        display: 'flex',
        width: "50%",
    },
    namaText : {
        fontWeight: 'bold',
        fontSize: 15,
        padding: 10
,       justifyContent: 'center',
        alignItems: 'center',
    },
    iconSetting: {
        fontSize: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapBawahlagi: {
        borderWidth: 1,
        width : "48%",
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },
    bawahprofil : {
        width : "50%",
        justifyContent: 'center',
    },
    bodyBawah : {
        backgroundColor: "#fff",
        width: "100%",
        padding: 15,
    },
    subJudul : {
        paddingBottom: 10,
        paddingTop : 15,
    },
    subJudulText : {
        fontSize : 15,
        fontWeight : 'bold',
    },
    wrapBody : {
        display: 'flex',
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingTop :10,
        paddingBottom: 5,
    },
    text : {
        paddingLeft : 10,
    }
})
export default Profil;