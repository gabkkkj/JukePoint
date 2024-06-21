import { View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function PerfilScreen(props) {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <View style={estilos.flexAround}>
        <MaterialCommunityIcons name="chevron-left" style={estilos.icon} />
        <Image style={estilos.profileImage} source={require('../assets/img/profile.jpg')} />
        <Text style={estilos.textMenor}>Buscar</Text>
        <MaterialCommunityIcons name="headphones" style={estilos.icon} />
      </View>

      <View style={estilos.section}>
        <Text style={estilos.sectionTitle}>Explore seus gêneros</Text>
        <View style={estilos.sectionHorizontal}>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 200, borderRadius: 3}} source={require('../assets/img/rap.png')} />
          </View>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 200, borderRadius: 3}} source={require('../assets/img/trap.png')} />
          </View>
          <View style={estilos.cardVertical}>
            <Image style={{width: 116, height: 200, borderRadius: 3}} source={require('../assets/img/MPB-.png')} />
          </View>
        </View>
      </View>

      <View style={estilos.cardContainer}>
        <View style={[estilos.column, { paddingRight: 5 }]}>
           <View style={[estilos.card, { backgroundColor: '#FA1BFF' }]}>
            <Text style={estilos.textMenor}>Música</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
          </View>
          <View style={[estilos.card, { backgroundColor: '#9C1FFF' }]}>
            <Text style={estilos.textMenor}>Em Alta</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
          </View>
          <View style={[estilos.card, { backgroundColor: '#FF0962' }]}>
            <Text style={estilos.textMenor}>Lançamentos</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
          </View>
        </View>

        <View style={[estilos.column, { paddingLeft: 5 }]}>
          <View style={[estilos.card, { backgroundColor: '#11774C' }]}>
            <Text style={estilos.textMenor}>Originais do Juke</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
          </View>
          <View style={[estilos.card, { backgroundColor: '#14205E' }]}>
            <Text style={estilos.textMenor}>Feito Para Você</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
          </View>
          <View style={[estilos.card, { backgroundColor: '#E3D12F' }]}>
            <Text style={estilos.textMenor}>Brasil</Text>
            <Image style={{width: 30, height: 30, marginRight: 10}} source={require('../assets/img/Logo-Branca.png')} />
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
    marginRight: 10
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
    height: 120,
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
    marginVertical: 10,
    width: '99%',
  },
});