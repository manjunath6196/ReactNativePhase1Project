import React from 'react'
import {View, Text, Image,Button} from 'react-native'
import {TextInput,ScrollView,TouchableOpacity} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({navigation}) => {
    const PrivacyScreen= () => {
        navigation.navigate('PrivacyScreen');
      }
        const ContactsScreen= () => {
            navigation.navigate('ContactsScreen');
        }
        const Explore= () => {
            navigation.navigate(' Explore');
        }
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
        }}>
           <View style={{
               backgroundColor:"#00a46c",
               height:"28%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   marginTop:25,
                   width:"100%"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontSize:28,
                            color:"#FFF",
                            fontWeight:"bold"
                        }}>SHOP</Text>
                   </View>
                   <View style={{width:"50%",alignItems:"flex-end"}}>
                         <Button
                        onPress={PrivacyScreen}
                        title="Privacy and Policy "
                        color=" #99ff99"
                   
                        />
                         <Button
                        onPress={ContactsScreen}
                        title="ContactsScreen"
                        color=" #99ff99"
                 
                        />
                   </View>
               </View>
           </View>
           <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                   paddingVertical:8,
                   paddingHorizontal:20,
                   marginHorizontal:20,
                   borderRadius:15,
                   marginTop:25,
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   <br></br>
                   
                   <TextInput
                        placeholder="Search Here"
                        placeholderTextColor="black"
                        style={{
                            fontWeight:"Italic",
                            fontSize:14,
                            width:260
                        }}
                   />
               </View>
            </LinearGradient>
                  <View style={{width:"50%",alignItems:"flex-end"}}>
                   <Button onPress={Explore}
                        title="EXPLORE  MORE PRODUCTS"
                        color=" #00a46c"
                        
                        />
                       
               </View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{height:400}}
                >
                    <LinearGradient
                        colors={["rgba(0,164,109,0.09)", "transparent"]}
                        style={{
                            position:"absolute",
                            left:0,
                            right:0,
                            height:100,
                            marginTop:220,
                            top:0
                        }}
                    />
                    <TouchableOpacity 
                        onPress={()=>navigation.navigate("Detail")}
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                          style={{ width: 100, height: 100, marginBottom: 15 }}
                            source={require('../../assets/images/lgtv.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>LG TV</Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"blue",
                                paddingLeft:35
                            }}>25,999.00</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"blue",
                            paddingTop:3
                        }}>
                           BUY NOW
                        </Text>
                    </TouchableOpacity>

                    <View 
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                         style={{ width: 50, height: 100, marginBottom: 0 }}
                            source={require('../../assets/images/poco m2 pro.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:5,
                            paddingHorizontal:5
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>POCO M2 Pro </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"blue",
                                paddingLeft:15
                            }}>18,900.00</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"blue",
                            paddingTop:3
                        }}>
                           BUY NOW
                        </Text>
                    </View>

                    <View 
                        style={{
                            height:250,
                            elevation:2,
                            backgroundColor:"#FFF",
                            marginLeft:20,
                            marginTop:20,
                            borderRadius:15,
                            marginBottom:10,
                            width:160
                        }}
                    >
                        <Image
                         style={{ width: 100, height: 100, marginBottom: 15 }}
                            source={require('../../assets/images/headphone.png')}
                        />
                        <View style={{
                            flexDirection:"row",
                            paddingTop:10,
                            paddingHorizontal:10
                        }}>
                            <Text style={{
                                fontWeight:"bold"
                            }}>Boat Bluetooth Earphones </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"blue",
                                paddingLeft:35
                            }}>1,499.00</Text>
                        </View>
                        <Text style={{
                            paddingHorizontal:10,
                            fontWeight:"bold",
                            color:"blue",
                            paddingTop:3
                        }}>
                            BUY NOW
                        </Text>
                    </View>
                </ScrollView>     
               <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center",
                   marginTop:-80,
               }}>    
               </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{marginBottom:-100}}
                >                 
                </ScrollView>             
        </View>
    )
}
export default Home;