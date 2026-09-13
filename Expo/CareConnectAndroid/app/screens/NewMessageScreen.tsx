import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type RootStackParamList from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'NewMessage'>;

export default function NewMessageScreen({ navigation }: Props) {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Messages')} accessibilityRole="button" accessibilityLabel="Back to messages">
            <Ionicons name="arrow-back" size={26} color="#000000" />
          </TouchableOpacity>
          <Text style={styles.title}>New Message</Text>
        </View>
        <Text style={styles.label}>To</Text>
        <TextInput style={styles.input} placeholder="Enter provider name" accessibilityLabel="Select message recipient" />
        <Text style={styles.label}>Message</Text>
        <TextInput style={[styles.input, styles.messageInput]} placeholder="Type your message here" multiline numberOfLines={6} textAlignVertical="top" accessibilityLabel="Enter message" />
        <TouchableOpacity style={styles.attach} onPress={() => {}} accessibilityRole="button" accessibilityLabel="Add attachment">
          <Ionicons name="attach" size={20} color="#2C67BA" />
          <Text style={styles.attachText}>Add attachment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.send} onPress={() => navigation.navigate('Messages')} accessibilityRole="button">
          <Text style={styles.sendText}>Send Message</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
 root:{flex:1,backgroundColor:'#FFF'},content:{paddingHorizontal:32,paddingTop:18,paddingBottom:40},
 header:{flexDirection:'row',alignItems:'center',marginBottom:28},title:{color:'#2C67BA',fontSize:22,fontWeight:'700',marginLeft:10},
 label:{fontSize:16,fontWeight:'600',marginBottom:8,marginTop:4},input:{borderWidth:1,borderColor:'#999',borderRadius:4,padding:12,fontSize:16,marginBottom:24},messageInput:{height:140},
 attach:{flexDirection:'row',alignItems:'center',paddingVertical:8},attachText:{color:'#2C67BA',fontSize:16,fontWeight:'600',marginLeft:6},
 send:{height:48,backgroundColor:'#2C67BA',alignItems:'center',justifyContent:'center',marginTop:32},sendText:{color:'#FFF',fontSize:16,fontWeight:'600'}
});
