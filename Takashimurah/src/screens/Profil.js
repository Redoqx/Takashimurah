import React  from 'react';
import { View, StyleSheet, Image, StatusBar, Text, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import color from '../config/color';

import Header from './Header';

const Profil = () => {
    return (
        <ScrollView>
            <Header/>
        <Text>Profil ngehe</Text>
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

export default Profil;