import { View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function PerfilScreen(props) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <View style={estilos.flexAround}>
        <MaterialCommunityIcons name="chevron-left" style={estilos.icon} />
        <Image style={estilos.profileImage} source={require('../assets/img/profile.jpg')} />
        <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" title='Tudo'></Button>
        <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" title='Playlist'></Button>
        <Button labelStyle={estilos.btnText} style={estilos.btn} mode="contained" title='Podcast'></Button>
        <MaterialCommunityIcons name="magnify" style={estilos.icon} />
      </View>

      <View style={estilos.cardContainer}>
        <View style={[estilos.column, { paddingRight: 5 }]}>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/cabelinho.jpg')} />
            <Text style={estilos.textMenor}>Minhas Favoritas</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/maxresdefault.jpg')} />
            <Text style={estilos.textMenor}>Kempa</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/jobim.png')} />
            <Text style={estilos.textMenor}>Esse é Tom Jobim</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/lenda.png')} />
            <Text style={estilos.textMenor}>A lenda</Text>
          </View>
        </View>

        <View style={[estilos.column, { paddingLeft: 5 }]}>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/india.png')} />
            <Text style={estilos.textMenor}>As melhores da india</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/mcc.jpg')} />
            <Text style={estilos.textMenor}>Little Hair</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/descoberta.jpg')} />
            <Text style={estilos.textMenor}>Descobertas da Semana</Text>
          </View>
          <View style={estilos.card}>
            <Image style={{width: 60, height: 60, borderRadius: 3, marginRight: 10}} source={require('../assets/img/SEMREH.png')} />
            <Text style={estilos.textMenor}>SEMREH</Text>
          </View>
        </View>
      </View>

      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>O Melhor de Cada Cantor</Text>
        <View style={estilos.sectionHorizontal}>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 116, borderRadius: 3}} source={require('../assets/img/theweeknd.jpg')} />
            <Text style={estilos.textMenor}>The Weeknd, Starboy</Text>
          </View>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 116, borderRadius: 3}} source={require('../assets/img/austin.png')} />
            <Text style={estilos.textMenor}>Post Malone, Austin</Text>
          </View>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 116, borderRadius: 3}} source={require('../assets/img/dex.webp')} />
            <Text style={estilos.textMenor}>Dex, É o trap memo!?</Text>
          </View>
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
  icon: {
    color: 'white',
    fontSize: 30,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  btnText: {
    color: 'white',
  },
  btn: {
    marginHorizontal: 5,
    backgroundColor: '#1DB954',
  },
  flexAround: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textMenor: {
    color: 'white',
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: '95%',
    flexDirection: 'row',
    backgroundColor: '#666',
    borderRadius: 3,
    alignItems: 'center',
    marginVertical: 5,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 25,
    marginBottom: 10,
  },
  cardVertical: {
    width: '33%',
    flexDirection: 'column',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    margin: 3
  },
  sectionHorizontal: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  section: {
    width: '90%',
    marginVertical: 10,
  },
});