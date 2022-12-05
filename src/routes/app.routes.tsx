import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Personal from '../pages/Personal'
import Queries from '../pages/Queries'
import DetailsQuerie from '../pages/DetailsQuerie'
import NearestUBS from '../pages/NearestUBS/'
import DetailsUBS from '../pages/NearestUBS/Details'
import NearestPharmacy from '../pages/NearestPharmacy'
import DetailsPharmacy from '../pages/NearestPharmacy/Details'


const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
 
  
  return(
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="login" component={Login} />
      <Screen name="register" component={Register} />
      <Screen name="home" component={Home} />
      <Screen name="personal" component={Personal} />
      <Screen name="queries" component={Queries} />
      <Screen name="details" component={DetailsQuerie} />
      <Screen name="ubs" component={NearestUBS} />
      <Screen name="detailsUbs" component={DetailsUBS} />
      <Screen name="pharmacy" component={NearestPharmacy} />
      <Screen name="detailsPharmacy" component={DetailsPharmacy} />
    </Navigator>
  )
} 