import React, { Component, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import Styles from '../../../../styles';
import Slider from '@react-native-community/slider';
import { ScrollView, TextInput} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';

function myGame({ navigation }) {

    const [gameListModalVisible, setgameListModalVisible] = useState([false, false, false]);
    const [genreModalVisible, setgenreModalVisible] = useState([false,false]);

    let arr_gameList = new Array(gameListModalVisible.length).fill(false);
    let arr_genre = new Array(genreModalVisible.length).fill(false);

    return (
        <View style={{width:'100%', height:'100%', backgroundColor:'#F7F7F7', paddingLeft:'10%', paddingRight:'10%'}}>
            <ScrollView>
                <View style={styles.title}>
                    <View style={{flexDirection:'row', alignItems:'center', width:'60%'}}>
                        <Text style={{ fontSize: 20, color: '#FFC81A' }}>{'\u2022   '}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>플레이 게임 리스트</Text>
                    </View>
                    <View style={{width:'40%', paddingRight:'5%', alignItems:'flex-end', justifyContent:'center'}}>
                        <TouchableOpacity style={{width:21, height:21}} onPress={()=>{
                            arr_gameList[0]=true;
                            setgameListModalVisible(arr_gameList);
                        }}>
                            <Image source={require('../../../../image/game_plus_tight.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{ fontSize: 18, color: '#FFC81A' }}>{'\u2022   '}</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>LEAGUE OF LEGEND</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#A5A5A5' }}>{'\u2022   '}</Text>
                        <Text style={{ fontSize: 11}}>dlwlgns110</Text>
                        <Text style={{ fontSize: 11 }}> </Text>
                        <Text style={{ fontSize: 11 }}>(SILVER)</Text>
                    </View>
                </View>
                
                <View style={styles.content}>
                    <Text>aaa</Text>
                </View>
                
                <View style={styles.title}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width:'60%' }}>
                        <Text style={{ fontSize: 20, color: '#FFC81A' }}>{'\u2022   '}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>선호하는 장르</Text>
                    </View>
                    <View style={{ width: '40%', paddingRight: '5%', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ width: 21, height: 21 }} onPress={() => {
                            arr_genre[0] = true;
                            setgenreModalVisible(arr_genre);
                        }}>
                            <Image source={require('../../../../image/game_plus_tight.png')} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.content}>
                    <View style={{ flexDirection: 'row', alignItems: 'center',height:35}}>
                        <View style={{ width: '50%', height: '100%', alignItems: 'center', flexDirection:'row'}}>
                            <Text style={{ fontSize: 18, color: '#A5A5A5' }}>{'\u2022   '}</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>RPG</Text>
                            <Text style={{ fontSize: 11 }}>  </Text>
                            <Text style={{ fontSize: 13, }}>(20%)</Text>
                        </View>
                        <View style={{width:'50%', height:'100%', alignItems:'center', flexDirection:'row', justifyContent:'flex-end'}}>
                            <View style={{ width: '90%', height: 8, borderWidth: 1, alignItems: 'flex-start', borderColor: '#E2E2E2'}}>
                                <View style={{ width: '20%', height:'100%', backgroundColor: '#00255A'}} />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', height: 35 }}>
                        <View style={{ width: '50%', height: '100%', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, color: '#A5A5A5' }}>{'\u2022   '}</Text>
                            <Text style={{ fontSize: 13, fontWeight: 'bold' }}>RPG</Text>
                            <Text style={{ fontSize: 11 }}>  </Text>
                            <Text style={{ fontSize: 13, }}>(20%)</Text>
                        </View>
                        <View style={{ width: '50%', height: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <View style={{ width: '90%', height: 8, borderWidth: 1, alignItems: 'flex-start', borderColor: '#E2E2E2' }}>
                                <View style={{ width: '20%', height: '100%', backgroundColor: '#00255A' }} />
                            </View>
                        </View>
                    </View>
                    
                </View>

                <Text style={{ fontSize:12, color:'#A5A5A5', marginTop:20, marginBottom:20}}>찾으시는 게임 장르가 없다면, 문의를 통해 메일로 요청해주십시오.</Text>

                <TouchableHighlight
                    style={{
                        width: '40%', height: 40, backgroundColor: "#00255A", alignSelf: 'center'
                        , borderRadius: 20, elevation: 2, justifyContent: 'center'
                    }}
                    onPress={() => { }}>
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>문의하기</Text>
                </TouchableHighlight>
            </ScrollView>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={gameListModalVisible[0]}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => setgameListModalVisible(arr_gameList)}
                onBackdropPress={() => setgameListModalVisible(arr_gameList)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{width:'100%', alignItems:'center', paddingLeft:'10%', paddingRight:'10%'}}>
                            <View style={{ height:50, flexDirection: 'row', alignItems:'center', justifyContent:'center', marginTop:25, marginBottom:25 }}>
                                <Image source={require("../../../../image/registered_1.png")} style={{ width: 30, height: 35 }} />
                                <Text style={{fontSize:16, fontWeight:'bold', marginLeft:15}}>게임 등록</Text>
                            </View>
                            <View style={{ width:'100%', height:40, borderRadius:10, borderWidth: 2, borderColor:'#A5A5A5', marginBottom:40}}>
                                <TextInput style={{ justifyContent:'center'}} 
                                    placeholder='게임 이름을 검색해주세요.' placeholderTextColor='#A5A5A5'/>
                            </View>
                            <View style={{ width: '100%', borderWidth: 0.15, backgroundColor:'#E2E2E2'}} />
                            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{width:'50%', alignItems:'center', justifyContent:'center'}}>
                                    <TouchableOpacity onPress={() => {
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '70%', borderWidth: 0.15, backgroundColor: '#E2E2E2'}} />
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        arr_gameList[1]=true;
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>확인</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={gameListModalVisible[1]}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => setgameListModalVisible(arr_gameList)}
                onBackdropPress={() => setgameListModalVisible(arr_gameList)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
                            <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 35, marginBottom: 35 }}>
                                <Image source={require("../../../../image/registered_1.png")} style={{ width: 30, height: 35 }} />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>아이디 입력</Text>
                            </View>
                            <View style={{ width: '100%', height: 40, borderBottomWidth: 2, borderBottomColor:'#A5A5A5', marginBottom: 40 }}>
                                <TextInput style={{ justifyContent: 'center' }}
                                    placeholder='해당 게임의 아이디(닉네임)을 입력하세요.' placeholderTextColor='#A5A5A5'/>
                            </View>
                            <View style={{ width: '100%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '70%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        arr_gameList[2]=true;
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>확인</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={gameListModalVisible[2]}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => setgameListModalVisible(arr_gameList)}
                onBackdropPress={() => setgameListModalVisible(arr_gameList)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
                            <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 35, marginBottom: 35 }}>
                                <Image source={require("../../../../image/registered_1.png")} style={{ width: 30, height: 35 }} />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>티어 선택</Text>
                            </View>
                            <View>

                            </View>
                            <View style={{ width: '100%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '70%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgameListModalVisible(arr_gameList)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>완료</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={genreModalVisible[0]}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => setgenreModalVisible(arr_genre)}
                onBackdropPress={() => setgenreModalVisible(arr_genre)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
                            <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 35, marginBottom: 35 }}>
                                <Image source={require("../../../../image/registered_1.png")} style={{ width: 30, height: 35 }} />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>장르 선택</Text>
                            </View>
                            <View style={{ width: '100%', height: 40, borderRadius: 10, borderWidth: 2, borderColor: '#A5A5A5', marginBottom: 40 }}>
                                <TextInput style={{ justifyContent: 'center' }}
                                    placeholder='게임 장르를 검색해주세요.' placeholderTextColor='#A5A5A5' />
                            </View>
                            <View style={{ width: '100%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgenreModalVisible(arr_genre)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '70%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        arr_genre[1]=true;
                                        setgenreModalVisible(arr_genre)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>확인</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationIn={"slideInUp"} //default 'slideInUp'
                animationOut={'slideOutDown'} //default 'slideOutDown'
                isVisible={genreModalVisible[1]}
                transparent={true} //default 'true'
                backdropColor={'black'} //default 'black'
                backdropOpacity={0.5} //default 0.7
                onBackButtonPress={() => setgenreModalVisible(arr_genre)}
                onBackdropPress={() => setgenreModalVisible(arr_genre)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: '100%', alignItems: 'center', paddingLeft: '10%', paddingRight: '10%' }}>
                            <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 35, marginBottom: 35 }}>
                                <Image source={require("../../../../image/registered_1.png")} style={{ width: 30, height: 35 }} />
                                <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 15 }}>장르 선호도</Text>
                            </View>
                            <View>

                            </View>
                            <View style={{ width: '100%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                            <View style={{ width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgenreModalVisible(arr_genre)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>취소</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: '70%', borderWidth: 0.15, backgroundColor: '#E2E2E2' }} />
                                <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => {
                                        setgenreModalVisible(arr_genre)
                                    }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>완료</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        justifyContent: 'center',
        alignItems: "center",
        padding: 20
    },
    title: {
        width: '100%', 
        height: 50,
        flexDirection: 'row', 
        alignItems: 'center',  
        marginTop: 10, 
    },
    content: {
        width: '95%', 
        borderRadius: 15, 
        backgroundColor: '#FFFFFF', 
        elevation: 5, 
        alignSelf: 'center', 
        marginBottom: 10, 
        padding: '5%' 
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
    },
    modalView: {
        width: '90%',
        //height: '85%',
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});


export default myGame;