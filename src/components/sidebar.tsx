'use client'

import {
    Box, Text, Divider, Input, InputRightElement, InputGroup, IconButton,
    Card, CardBody, Stack, StackDivider, Heading
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import GuestMenu from "@/components/loginMenu/GuestMenu";

const SideBar = () => {
    let [school, schoolSet] = useState([
        "선린인터넷고등학교", "한국디지털미디어고등학교", "휘문고등학교", "상산고등학교", "단국대학교부속소프트웨어고등학교", "서울공연예술고등학교",
        "선린인터넷고등학교1", "한국디지털미디어고등학교1", "휘문고등학교1", "상산고등학교1", "단국대학교부속소프트웨어고등학교1", "서울공연예술고등학교1",
    ])
    return (
        <>
            <Box w='300px'>
                    <GuestMenu/>
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
        </>
    );
}

export default SideBar
