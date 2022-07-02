import { View, Text } from 'react-native'
import { PlatformRocketseatLogo } from '../../utils/assets'

import { styles } from './styles'

{/* https://transform.tools/svg-to-react-native */}
export function Footer() {
  return (
    <View style={styles.footer}>
        <PlatformRocketseatLogo />

        <Text style={styles.text}>
            Rocketseat - Todos os direitos reservados
        </Text>

        <Text style={styles.text}>
            Políticas de privacidade
        </Text>

    </View>
  )
}
