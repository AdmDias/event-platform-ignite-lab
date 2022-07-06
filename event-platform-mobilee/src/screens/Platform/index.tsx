import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { EventLogo } from "../../utils/assets/svg/EventLogo";
import { List, X } from "phosphor-react-native";
import SafeAreaView from "react-native-safe-area-view";
import { layout, styles } from './styles' 

import { Video } from "../../components/Video";
import { Sidenav } from "../../components/Sidenav";
import { Footer } from "../../components/Footer";

/*import { RootStackParamList } from "../../@types/RootStackParams";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Subscribe'>*/

export function Platform(/*{ navigation }: Props*/){
  const [isMenuOpen, setIsMenuOpen] = useState(false) 

  return (
    <SafeAreaView style={layout.safeArea}>
      <ScrollView>
          <View style={layout.container}>

              <View style={layout.header}>
                  <EventLogo width={"167"} height={"24"} />

                  <View style={styles.navigation}>
                    <Text style={{ fontSize: 14, color: "#E1E1E6" }}>Aulas</Text>

                    <TouchableOpacity 
                      onPress={() => setIsMenuOpen(!isMenuOpen)}
                      style={{ padding: 4 }}
                    >
                      {
                        isMenuOpen ? <X size={32} color="#81D8F7" /> : <List size={32} color="#81D8F7" />
                      }
                        
                    </TouchableOpacity>

                  </View>
              </View>
              <View style={layout.content}>
                <Video
                  ytVideoID={"dCb4nMEyH_4"}
                  //ytVideoID={null}
                />
                {
                  isMenuOpen && <Sidenav />
                }
              </View>
              <Footer />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
