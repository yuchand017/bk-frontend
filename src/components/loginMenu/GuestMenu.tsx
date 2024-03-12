'use client'

import {Box, Button, Text} from "@chakra-ui/react";

const GuestMenu = () => {
    return (
        <Box textAlign='center' paddingTop='60px'
             paddingRight='24px' paddingLeft='24px' paddingBottom='40px'>
            <Text fontFamily="bold" fontSize='4xl' align='center' marginBottom='28px'>BK.</Text>
            <Button size='md' variant='outline' colorScheme='teal' w='100%' marginBottom='8px'>로그인</Button>
            <Button size='md' variant='solid' colorScheme='teal' w='100%' marginBottom='8px'>BK 회원가입</Button>
            <Button size='xs' variant='link' colorScheme='teal' marginBottom='8px'>아이디/비밀번호 찾기</Button>
        </Box>
    );
}

export default GuestMenu