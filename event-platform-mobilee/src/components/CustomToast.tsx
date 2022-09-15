import { Box, IBoxProps } from "native-base"

interface CustomToastProps extends IBoxProps{
    message: string;
    type: 'error' | 'success' | 'warning' | 'info';
}

const typeColors = {
    error: 'error.500',
    success: 'green.500',
    warning: 'orange.500',
    info: 'blue.200'
}

export function CustomToast({ message, type, ...rest }: CustomToastProps) {

    return (
        <Box
            p={2}
            rounded='sm'
            _text={{
                fontWeight: 'bold',
                color: 'white'
            }}
            { ...rest }
            bg={typeColors[type]}
        >
            { message }
        </Box>
    )
}