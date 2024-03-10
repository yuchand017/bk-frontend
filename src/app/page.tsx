'use client'

import Image from "next/image"
import {
    Flex, Box, Text, Button, Divider, Input, InputRightElement, InputGroup, IconButton,
    Card, CardBody, Stack, StackDivider, Heading
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


export default function Home() {
    let [school, schoolSet] = useState([
        "선린인터넷고등학교", "한국디지털미디어고등학교", "휘문고등학교", "상산고등학교", "단국대학교부속소프트웨어고등학교", "서울공연예술고등학교",
        "선린인터넷고등학교1", "한국디지털미디어고등학교1", "휘문고등학교1", "상산고등학교1", "단국대학교부속소프트웨어고등학교1", "서울공연예술고등학교1",
    ])
  return (
    <main>
      <Flex w='300px' h='100%' position='fixed'
      >
        <Box w='100%' h='100%'>
            <Box textAlign='center' paddingTop='60px'
                 paddingRight='24px' paddingLeft='24px' paddingBottom='40px'>
                <Text fontFamily="bold" fontSize='4xl' align='center' marginBottom='28px'>BK.</Text>
                <Button size='md' variant='outline' colorScheme='teal' w='100%' marginBottom='8px'>로그인</Button>
                <Button size='md' variant='solid' colorScheme='teal' w='100%' marginBottom='8px'>BK 회원가입</Button>
                <Button size='xs' variant='link' colorScheme='teal' marginBottom='8px'>아이디/비밀번호 찾기</Button>
            </Box>
            <Divider/>
            <Box paddingTop='24px' paddingRight='12px' paddingLeft='12px' paddingBottom='12px' >
                <Text fontFamily='bold' fontSize='md' marginTop='8px' paddingLeft='12px' marginBottom='8px'>우리학교 커뮤니티 둘러보기</Text>
                <InputGroup marginBottom='8px'>
                    <Input placeholder='학교명을 입력해주세요'/>
                    <InputRightElement width='3rem'>
                        <IconButton size='xs' aria-label='search' icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                    </InputRightElement>
                </InputGroup>
                <Card maxH='500px' overflowY='auto' sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
                    <CardBody>
                        <Stack divider={<StackDivider />} spacing='4'>
                            {school.map((school, index) => (
                                <Box key={index}>
                                    <Heading size='xs' textTransform='uppercase'>
                                        {school}
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        100+ 명 활동중, 25+ 개의 게시물
                                    </Text>
                                </Box>
                            ))}
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
      </Flex>
    </main>
  );
}
