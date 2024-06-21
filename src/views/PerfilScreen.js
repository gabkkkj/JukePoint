import { View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function PerfilScreen(props) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <View style={estilos.flexAround}>
        <MaterialCommunityIcons name="chevron-left" style={estilos.text} />
        <Text style={estilos.textMenor}>Seus Pontos: 34.217</Text>
      </View>

      <View style={estilos.flexBox}>
        <View style={estilos.flexBox2}>
          <Image style={{width: 70, height: 70, borderRadius: 400/ 2}}  source={require('../assets/img/profile.jpg')} />
          <View style={estilos.userInfo}>
            <Text style={estilos.userName}>CR7</Text>
            <Text style={estilos.userDetails}>6 seguidores ° 69 seguindo</Text>
          </View>
        </View>
        <View style={estilos.actionBox}>
          <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" title='editar'>
          </Button>
          <MaterialCommunityIcons name="dots-horizontal" style={estilos.text} />
        </View>
      </View>

      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Playlists</Text>
        <View style={estilos.card}>
          <Image style={estilos.img} source={require('../assets/img/trabalho.jpg')} />
          <Text style={estilos.textMenor}>Rap</Text>
        </View>
        <View style={estilos.card}>
          <Image style={estilos.img} source={require('../assets/img/trabalho2.jpg')} />
          <Text style={estilos.textMenor}>MPB</Text>
        </View>
        <View style={estilos.card}>
          <Image style={estilos.img} source={require('../assets/img/trabalho3.jpg')} />
          <Text style={estilos.textMenor}>Internacional</Text>
        </View>
      </View>

      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Artistas tocados recentemente</Text>
        <View style={estilos.card}>
          <Image style={{width: 70, height: 70, borderRadius: 400/ 2, marginRight: 10}} source={require('../assets/img/redondo1.jpg')} />
          <Text style={estilos.textMenor}>Illmatic – Álbum de Nas</Text>
        </View>
        <View style={estilos.card}>
          <Image style={{width: 70, height: 70, borderRadius: 400/ 2, marginRight: 10}} source={require('../assets/img/redondo2.jpg')} />
          <Text style={estilos.textMenor}>Tyler, The Creator - Igor</Text>
        </View>
        <View style={estilos.card}>
          <Image style={{width: 70, height: 70, borderRadius: 400/ 2, marginRight: 10}} source={require('../assets/img/redondo3.jpg')} />
          <Text style={estilos.textMenor}>Damn - Kendrick Lamar</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#343434',
    paddingVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  textMenor: {
    color: 'white',
    fontSize: 15,
  },
  flexAround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  img: {
    height: 70,
    width: 70,
    marginRight: 10,
  },
  imgRound: {
    height: 70,
    width: 70,
    marginRight: 10,
    borderRadius: 70/70,
  },
  flexBox: {
    width: '90%',
    marginVertical: 10,
  },
  flexBox2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    color: 'white',
    fontSize: 20,
  },
  userDetails: {
    color: 'white',
    fontSize: 15,
  },
  actionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  section: {
    width: '90%',
    marginVertical: 10,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 25,
    marginBottom: 10,
  },
});