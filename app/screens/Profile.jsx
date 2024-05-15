import React from 'react';
import { Image,ScrollView, StyleSheet, Text, View } from 'react-native';


export default function Profile(){

    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileImageContainer}>
                    <Image 
                    source={require('../assets/Steve jobs.jpeg')}
                    style={styles.profileImage}
                    />
                </View>
            </View>

            {/**main */}
            <View style={styles.main}>
                <View style={styles.TitleContainer}>
                    <Text style={styles.title}>Steve Jobs</Text>
                    <Text></Text>
                </View>
                <View style={styles.descripionContainer}>
                    <ScrollView>
                        <Text style={styles.descripion}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula nunc. Curabitur ornare, dolor eget finibus tincidunt, tellus mi convallis erat, quis efficitur lectus massa eu quam. Aenean accumsan, sapien nec pellentesque vehicula, turpis nibh ullamcorper eros, accumsan imperdiet elit urna vitae risus.</Text>
                    </ScrollView>

                </View>
            </View>


           {/*footer*/}
            <View style={styles.footer}>

                <View style={[styles.footerItem,{backgroundColor:"#5386a9"}]}>
                    <Text style={styles.footerText}>842-213-7732</Text>
                </View>

                <View style={[styles.footerItem,{backgroundColor:"#4580b1"}]}>
                    <Text>Stevejobs@gmail.com</Text>
                </View>
            </View>
          
        </View>
    )
    
}


const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    profileImage:{
        width:150,
        height:150,
        borderRadius:85, 
        alignContent: "center",
    },

    header:{
        flex:1,
        backgroundColor:"#fff",
    },

    profileImageContainer:{
        width:160,
        height:160,
        marginTop:90,
        borderRadius:90,
        backgroundColor:"#b1dfe1",
        alignSelf: "center", // Center the container within its parent
        justifyContent: "center", // Center the child (image) within the container vertically
        alignItems: "center", // Center the child (image) within the container horizontally  
    },

    main:{
        flex:1,
        backgroundColor:"#b1dfe1",
    },

    descripionContainer:{
        marginRight:20,
        marginLeft:20,
        backgroundColor:"#b1dfe1",
        flexGrow: 1, // Allow the ScrollView to take up remaining space
    },

    TitleContainer:{
        marginTop:70,
        marginBottom:50,
        alignItems:"center",
    },

    title:{
        fontSize:24,
        fontWeight: "bold",
        color:"#000",
    },

    descripion:{
        flex:1,
        fontSize:15,
        color:"#545454",
    },

    footer:{
        flex:0.2,
        flexDirection:"row",
        height:10
    },

    footerItem:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },

    footerText:{
        fontSize:12,
        fontWeight:'bold',
        color:'#fff'
    },
  });


















































