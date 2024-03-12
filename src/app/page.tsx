'use client'

import Sidebar from '../components/sidebar'
import {
    Flex,
    Stat,
    Text,
    StatNumber,
    StatHelpText,
    Button,
    Tab,
    Stack,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    SimpleGrid,
    Card,
    CardHeader,
    Heading,
    CardFooter,
    CardBody, Box, Avatar, TagLabel, Tag, TagLeftIcon
} from "@chakra-ui/react";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHeart,
    faChartSimple,
    faGlobe,
    faSchool,
    faComment
} from "@fortawesome/free-solid-svg-icons"
import Feedbar from "@/components/feedbar";
import SideSearchBar from "@/components/SideSearchBar";

export default function Home() {
    const [tabIndex, setTabIndex] = useState(0)

    const handleTabsChange = (index: any) => {
        setTabIndex(index)
    }
  return (
    <main>
        <Flex>
        <Sidebar />
        <Flex flex="1" direction="column">
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList>
                    <Tab>🏠 홈</Tab>
                    <Tab>💬 타임라인</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex>
                            <div>
                        <Stat>
                            <StatNumber>2024년 3월 11일</StatNumber>
                            <StatHelpText>학생상담주간(~3.22)</StatHelpText>
                        </Stat>
                            <Stack direction='row' spacing={4} align='center' paddingBottom='12px'>
                                <Button leftIcon={<FontAwesomeIcon icon={faSchool} />} colorScheme='teal' variant='outline'>
                                    선린인터넷고등학교 홈페이지
                                </Button>
                                <Button leftIcon={<FontAwesomeIcon icon={faGlobe} />} colorScheme='teal' variant='outline'>
                                    구글 클래스룸
                                </Button>
                                <Button leftIcon={<FontAwesomeIcon icon={faGlobe} />} colorScheme='teal' variant='outline'>
                                    선린 구름 (goorm.io)
                                </Button>
                            </Stack>
                            <SimpleGrid columns={[1, 2,3]} spacing={4}>
                                <Card >
                                    <CardHeader>
                                        <Heading size='md'>🍴 내일 3/12 급식 [중식]</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>(대체)백미밥<br/>
                                            (추대체)김치콩나물국 (5.6.9.13.18)<br/>
                                            치즈토마토스파게티 (1.2.5.6.10.12.13.15.16.18)<br/>
                                            클링클컷&개별케찹 (2.5.6.12)<br/>
                                            페스츄리소시지 (1.2.5.6.10.12.16.18)<br/>
                                            (대체)도시락김 (13)<br/>
                                            우유에 타 먹는 초코 (2.5.6)<br/>
                                            열대과일샐러드(망고드레싱) (5.12)
                                        </Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Button>3월 급식 식단표 보기</Button>
                                    </CardFooter>
                                </Card>
                                <Card>
                                    <CardHeader>
                                        <Heading size='md'>📢 4반 공지사항</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>
                                            아무것도 없네요.
                                        </Text>
                                    </CardBody>
                                    <CardFooter>
                                        <Button>자세히 보기</Button>
                                    </CardFooter>
                                </Card>
                            </SimpleGrid>
                            </div>
                            <Feedbar />
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                        <Flex>
                            <div><SideSearchBar /></div>
                            <Stack maxW='600px' spacing={4} align='center' paddingBottom='12px'>
                                <Text fontFamily='bold' fontSize='2xl' marginTop='8px' paddingLeft='12px' marginBottom='8px'>최신 게시물</Text>
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
                                        저푸른 초원위에 그림같은 집을 짓고서 님과 함께 살고싶은 기분이야 누굴 좋아한다는 그 이유가
                                        그런 이유가 어딨겠어 그저 어느 누군가 맘에들면 그냥 맘에 드는거지
                                        나는 날아 날아올라
                                        그대와 함께 있을때면 워우워
                                        All light 연애하는 기분이란
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
                                        저푸른 초원위에 그림같은 집을 짓고서 님과 함께 살고싶은 기분이야 누굴 좋아한다는 그 이유가
                                        그런 이유가 어딨겠어 그저 어느 누군가 맘에들면 그냥 맘에 드는거지
                                        나는 날아 날아올라
                                        그대와 함께 있을때면 워우워
                                        All light 연애하는 기분이란
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
                                        저푸른 초원위에 그림같은 집을 짓고서 님과 함께 살고싶은 기분이야 누굴 좋아한다는 그 이유가
                                        그런 이유가 어딨겠어 그저 어느 누군가 맘에들면 그냥 맘에 드는거지
                                        나는 날아 날아올라
                                        그대와 함께 있을때면 워우워
                                        All light 연애하는 기분이란
                                    </Text>
                                    <CardFooter>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faComment} />}>134</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faHeart} />}>1.1만</Button>
                                        <Button size='sm' variant='ghost' leftIcon={<FontAwesomeIcon icon={faChartSimple} />}>974만</Button>
                                    </CardFooter>
                                </Card>
                            </Stack>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
        </Flex>
    </main>
  );
}
