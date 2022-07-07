import { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { EventLogo } from "../../utils/assets/svg/EventLogo";
import { List, X } from "phosphor-react-native";
import SafeAreaView from "react-native-safe-area-view";
import { layout, styles } from './styles' 

import { Video } from "../../components/Video";
import { Sidenav } from "../../components/Sidenav";
import { Footer } from "../../components/Footer";


export function Platform(){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [currentSlug, setCurrentSlug] = useState('') //useState('nlw-return-impulse-stage-01')

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
                  lessonSlug={currentSlug}
                />
                {
                  isMenuOpen && <Sidenav onChangeCurrentSlug={setCurrentSlug}/>
                }
                {/* 
                  Check 'isMenuOpen' performance
                  Add setIsMenuOpen as prop to 'Sidenav' component 
                */}
              </View>
              <Footer />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
