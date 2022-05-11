import React,{useContext} from "react";
import { StyleSheet,View,Text, FlatList, TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import {Context} from "../context/BlogContext";

const HomeScreen = ({navigation})=>{
    const value = useContext(Context)

    return(
        <View>
            <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:8,fontSize:16}}  onPress={value.addBlogPost}>
                <Text>Add Blog Post</Text>
            </TouchableOpacity>
            <FlatList
            data={value.data}
            keyExtractor={(value)=>value.title}
            renderItem={({ item })=>{
                return(
                    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ShowScreen',{id:item.id})}>
                        <Text style={styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress={()=>value.deleteBlogPost(item.id)}>
                            <Feather style={styles.iconTitle} name="trash"/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        borderBottomWidth:1
    },
    title:{
        fontSize:18
    },
    iconTitle:{
        fontSize:25
    }
})

export default HomeScreen;