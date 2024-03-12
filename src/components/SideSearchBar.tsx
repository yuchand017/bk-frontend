'use client'

import {
    Box, Text, Button, Divider, Input, InputRightElement, InputGroup, IconButton,
    Card, CardBody, Stack, StackDivider, Heading, CardHeader, Flex, Avatar, Tag, TagLeftIcon, TagLabel, CardFooter
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChartSimple, faComment, faHeart, faMagnifyingGlass, faSchool} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";

const SideSearchBar = () => {
    let [school, schoolSet] = useState([
        "선린인터넷고등학교", "한국디지털미디어고등학교", "휘문고등학교", "상산고등학교", "단국대학교부속소프트웨어고등학교", "서울공연예술고등학교",
        "선린인터넷고등학교1", "한국디지털미디어고등학교1", "휘문고등학교1", "상산고등학교1", "단국대학교부속소프트웨어고등학교1", "서울공연예술고등학교1",
    ])
    return (
        <>
            <Box w='600px'>
                <Text fontFamily="bold" fontSize='4xl' align='center' marginBottom='28px'>이름 미정.</Text>
                <Box paddingTop='24px' paddingRight='12px' paddingLeft='12px' paddingBottom='12px' >
                    <Text fontFamily='bold' fontSize='md' marginTop='8px' paddingLeft='12px' marginBottom='8px'>무슨 일이 일어나고 있나요?</Text>
                    <InputGroup marginBottom='8px'>
                        <Input placeholder='검색'/>
                        <InputRightElement width='3rem'>
                            <IconButton size='xs' aria-label='search' icon={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
                        </InputRightElement>
                    </InputGroup>
                    <Card maxH='650px' overflowY='auto' sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
                        <CardBody>
                            <Text fontFamily='bold' fontSize='md' marginTop='8px' paddingLeft='12px' marginBottom='28px'>인기 게시물</Text>
                            <Stack spacing='4'>
                                <Card maxW='600px' paddingTop={0} paddingBottom={0}>
                                    <CardHeader>
                                        <Flex>
                                            <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                                <Box>
                                                    <Heading size='sm'>Elon Musk</Heading>
                                                    <Text>@elonmusk</Text>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </CardHeader>
                                    <Text paddingLeft='24px' paddingRight='24px'>
                                        <Tag size='sm' key='sm' variant='subtle' colorScheme='cyan'>
                                            <TagLeftIcon boxSize='12px' as={FontAwesomeIcon} icon={faSchool} />
                                            <TagLabel>선린인터넷고등학교</TagLabel>
                                        </Tag><br />
                                        정말 유치할것 같아 내가 하는 모든 얘기가 산다는게 원래 그런 거라지만
                                    </Text>
                                    <CardFooter>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faComment} />}>134</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faHeart} />}>1.1만</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faChartSimple} />}>974만</Button>
                                    </CardFooter>
                                </Card>
                                <Card maxW='600px' paddingTop={0} paddingBottom={0}>
                                    <CardHeader>
                                        <Flex>
                                            <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                                <Box>
                                                    <Heading size='sm'>Elon Musk</Heading>
                                                    <Text>@elonmusk</Text>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </CardHeader>
                                    <Text paddingLeft='24px' paddingRight='24px'>
                                        <Tag size='sm' key='sm' variant='subtle' colorScheme='cyan'>
                                            <TagLeftIcon boxSize='12px' as={FontAwesomeIcon} icon={faSchool} />
                                            <TagLabel>선린인터넷고등학교</TagLabel>
                                        </Tag><br />
                                        정말 유치할것 같아 내가 하는 모든 얘기가 산다는게 원래 그런 거라지만
                                    </Text>
                                    <CardFooter>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faComment} />}>134</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faHeart} />}>1.1만</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faChartSimple} />}>974만</Button>
                                    </CardFooter>
                                </Card>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
        </>
    );
}

export default SideSearchBar