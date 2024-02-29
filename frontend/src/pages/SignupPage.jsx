import {Flex, Image, Stack} from '@chakra-ui/react'
// Components
import SignupForm from "../components/SignupForm.jsx";

const SignupPage = () => {
    return(
        <>
            <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
                <SignupForm/>
                <Flex flex={1}>
                    <Image
                        alt={'Login Image'}
                        objectFit={'cover'}
                        src={
                            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                        }
                    />
                </Flex>
            </Stack>
        </>
    )

}

export default SignupPage;