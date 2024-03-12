'use client'

import {
    Box, Text,
    Card, CardBody, Stack, StackDivider, Heading, Tag,
    Flex, Avatar, Tooltip, Link
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


const FeedBar = () => {
    let [school, schoolSet] = useState([
        "#중간고사"
    ])
    return (
        <>
            <Box w='500px'>
                <Box paddingRight='12px' paddingLeft='12px' paddingBottom='12px' >
                    <Text fontFamily='bold' fontSize='md' marginTop='8px' paddingLeft='12px' marginBottom='8px'>🚀 실시간</Text>
                    <Card maxH='800px' overflowY='auto' sx={{ "&::-webkit-scrollbar": { display: "none" } }}>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                {school.map((school, index) => (
                                    <Box key={index}>
                                        <Tag>경기도에서 트랜드 중</Tag>
                                        <Heading paddingTop='8px' size='md' textTransform='uppercase'>
                                            {school}
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            100+ 명 활동중, 25+ 개의 게시물
                                        </Text>
                                    </Box>
                                ))}
                                <Box>
                                    <Tag>고등 - 실시간 트랜드</Tag>
                                    <Heading paddingTop='8px' size='md' textTransform='uppercase'>
                                        왜 방학끝남????
                                    </Heading>
                                    <Text pt='2' fontSize='sm'>
                                        100+ 명 활동중, 25+ 개의 게시물
                                    </Text>
                                </Box>
                                {Array.from({length:7}, (_, i) => (
                                    <Box key={i}>
                                        <Tag>경기도에서 트랜드 중</Tag>
                                        <Flex paddingBottom='12px' paddingTop='12px'>
                                            <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                                <Avatar size='sm' name='@sunrin_tapie' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />

                                                <Box>
                                                    <Heading size='sm'>
                                                        <Tooltip label="@sunrin_tapie" aria-label='@sunrin_tapie'>
                                                            허경영
                                                        </Tooltip>
                                                    </Heading>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                        <Text>
                                            선착순 100명 공중부양 무료강의 배포 ... (+사진)<br/>
                                            <Link color='teal.500' href='#'>
                                                게시글로 이동 <FontAwesomeIcon size='sm' icon={faExternalLink} />
                                            </Link>
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

export default FeedBar
