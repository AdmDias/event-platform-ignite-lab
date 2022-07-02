import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { EventLogo } from "../../utils/assets/svg/EventLogo";
import * as Icon from "phosphor-react-native";
import { layout, styles } from './styles' 
import SafeAreaView from "react-native-safe-area-view";

export function Platform(){
  return (
    <SafeAreaView style={layout.safeArea}>
      <ScrollView>
          <View style={layout.container}>

              <View style={layout.header}>
                  <EventLogo width={"167"} height={"24"} />

                  <View style={styles.navigation}>
                    <Text style={{ fontSize: 14, color: "#E1E1E6" }}>Aulas</Text>
                    <TouchableOpacity style={{ padding: 4 }}>
                      <Icon.List size={32} color="#81D8F7" />
                    </TouchableOpacity>
                  </View>
              </View>

              <View style={{ flex: 1, backgroundColor: "red", height: 203 }}>

              </View>

          </View>
      </ScrollView>
    </SafeAreaView>
  )
}
