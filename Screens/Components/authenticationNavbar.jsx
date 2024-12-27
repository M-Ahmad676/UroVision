import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import logo from "../../assets/kidney.png";
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function authenticationNavbar({backArrowBtn, contentStyle}) {

const navigation = useNavigation();

return (
  <>
  <View style={{ height: 90 }}>
    <View style={[styles.navbar, {justifyContent:contentStyle} ]}>
      {backArrowBtn && navigation.canGoBack() && ( 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' style={{fontSize: 25, paddingTop:10, paddingRight:30, color:"#51ACFF"}} />
        </TouchableOpacity>
      )}
      <View>
      <Text style={{ color: '#51ACFF', fontSize: 17, fontWeight: '600'}}>
        <Text style={{ color: 'red' }}>Uro</Text>Vision
        <Image source={logo} style={{ height: 30, width: 30 }} />
      </Text>
      </View>
     <Text></Text>
     <Text></Text>
    </View>
  </View>
  <View
    style={{
      width: 150,
      backgroundColor: '#51ACFF',
      height: 150,
      borderRadius: 100,
      position: 'absolute',
      top: -30,
      right: -30,
    }}
  ></View>
</>
)
}

const styles = StyleSheet.create({

  navbar: {
      flex: 1,
      alignItems: "center",
      flexDirection: "row",
      marginTop: 20,
    },

})
