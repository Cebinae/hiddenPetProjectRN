import { View,} from "react-native"
import Modal from "react-native-modal";
import { FlashList } from "@shopify/flash-list";
import * as React from 'react'
import { useSelector} from "react-redux";
import ExtendedCard from "./card/modalCard";
import { colors } from "../../../../globalColors";
import { Dimensions } from "react-native";
import MemoizedCard from "./card/card";
import OnEmptyList from "./onEmpty/empyComp";
import { StatusBar } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import { useNavigation } from "@react-navigation/native";


export default function ItemsPool(){


const styles= {
    background:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
        height:'95%',               
    },
    wrapper:{
        width:'100%',       
        backgroundColor:colors.bg1000,
        padding:'1%',
        margin:0
    },
    modalBackground:{
        flex:1,
        backgroundColor:'rgba(0, 0, 0, 0.58)',
        display:'flex',
        justifyContent:'center',        
    },
    modalWindow:{
        width:'70%',
        height:'40%',
        backgroundColor:'grey',
        borderRadius:20,
        alignSelf:'center',
        top:'-10%'
    }   
}


let displayableItems = useSelector((state)=> state.resulting.displayableItems)


let itemToShow = React.useRef({price:{USD:'default'}})
const selectItemToShow =(passedItem:object)=> itemToShow.current = Object.assign(passedItem)

const [modalVisible, setModalVisible] = React.useState(false);
let navigation = useNavigation()

let closeModal = ()=> {
    changeNavigationBarColor(colors.bg400)

    setModalVisible(!modalVisible)
    StatusBar.setBackgroundColor(colors.bg700)
    
}

let openModal = ()=> {
    changeNavigationBarColor('#121111', undefined, true)
    setModalVisible(true)
    
}



const renderItem = ({item})=>  MemoizedCard(item, selectItemToShow, openModal)
const keyExtractor = (item: object) => item?.extra?.offerId


const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;


    return(
    
       

        <View style={styles.background}>
            
            <View style={styles.wrapper}>
                <FlashList                
                    horizontal={false}               
                    contentInset={{left:10}}
                    numColumns={3}                   
                    data={displayableItems}
                    extraData={displayableItems}
                    renderItem={renderItem}
                    estimatedItemSize={100} //7
                    ListEmptyComponent={<OnEmptyList></OnEmptyList>}
                    keyExtractor={keyExtractor}               
                ></FlashList>
            </View>
       
            <Modal
            style={{ margin: 0 }}
            animationType="slide"
            onModalShow={()=>changeNavigationBarColor(colors.bg700)}
            coverScreen={true}
            transculent={true}
            deviceWidth={deviceWidth}
            deviceHeight={deviceHeight}
            visible={modalVisible}
            onRequestClose={closeModal}>     
                <ExtendedCard closeFnc={closeModal} itemToShow={itemToShow}></ExtendedCard>

            </Modal>
        </View>

  
    )
}