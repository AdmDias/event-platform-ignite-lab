import { Center, Spinner } from "native-base";

export function Loading(){
    return (
        <Center
            w='full'
            h='full'
            bg='gray.700'
            alignItems='center'
            justifyContent='center'
        >
            <Spinner size='lg' color='green.500'/>
        </Center>
    )
}