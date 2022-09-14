import { Box } from "native-base"

interface ErrorToastProps {
    message: string;
}

export function ErrorToast({ message }: ErrorToastProps) {
    return (
        <Box
            p={2}
            bg='error.500'
            rounded='sm'
            _text={{
                fontWeight: 'bold',
                color: 'white'
            }}
        >
            { message }
        </Box>
    )
}