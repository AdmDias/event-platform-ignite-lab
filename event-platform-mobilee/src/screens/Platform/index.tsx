import { useRef, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useGetLessonsQuery } from "../../graphql/generated";
import { EventLogo } from "../../utils/assets/svg/EventLogo";
import { List, X } from "phosphor-react-native";
import SafeAreaView from "react-native-safe-area-view";
import { layout, styles } from './styles' 

import { Video } from "../../components/Video";
import { Sidenav } from "../../components/Sidenav";
import { Footer } from "../../components/Footer";

export function Platform(){
  const [isSideNavOpen, setIsSideNavOpen] = useState(false)
  const [currentSlug, setCurrentSlug] = useState<string | null>(null) //useState('nlw-return-impulse-stage-01')
  const scrollRef = useRef<any>();
  
  const { data: lessons, loading: isLoadingLessons } = useGetLessonsQuery()

  return (
    <SafeAreaView style={layout.safeArea}>
      <ScrollView ref={scrollRef}>
          <View style={layout.container}>

              <View style={layout.header}>
                  <EventLogo width={"167"} height={"24"} />

                  <View style={styles.navigation}>
                    <Text style={{ fontSize: 14, color: "#E1E1E6" }}>Aulas</Text>

                    <TouchableOpacity 
                      style={{ padding: 4 }}
                      onPress={() => setIsSideNavOpen(!isSideNavOpen) }
                    >
                      {
                        isSideNavOpen ? <X size={32} color="#81D8F7" /> : <List size={32} color="#81D8F7" />
                      }
                        
                    </TouchableOpacity>

                  </View>
              </View>
              <View style={layout.content}>
                { 
                  currentSlug ? <Video lessonSlug={currentSlug} /> 
                  : 
                  (
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6"}}>Bem-vindo</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6"}}>Assista a todas as aulas do evento</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6"}}>Basta clicar em 'Aulas' no canto superior direito</Text>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#E1E1E6"}}>E escolher a aula desejada!</Text>
                    </View>
                  )
                }
                <Sidenav
                  scrollViewRef = {scrollRef}
                  isSideNavOpen={isSideNavOpen}
                  lessons={lessons}
                  isLoadingLessons={isLoadingLessons}
                  onOpenSideNav={setIsSideNavOpen}
                  onChangeCurrentSlug={setCurrentSlug}
                />
              </View>
              <Footer />
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
