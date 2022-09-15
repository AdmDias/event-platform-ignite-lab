import { Center } from 'native-base'

export function SimpleGuide() {
    return (
        <Center
              w="full"
              p={6}
              _text={{
                fontSize: "md",
                fontWeight: "bold",
                color: "gray.100",
                textAlign: "center",
              }}
            >
              Bem-vindo {"\n"}
              Assista a todas as aulas do evento {"\n"}
              Basta clicar em 'Aulas' no canto superior direito {"\n"}E escolher
              a aula desejada {"\n"}
              Bons estudos !!!
        </Center>
    )
}