'use client'

import Sidebar from '../components/sidebar'
import {
    Flex,
    Stat,
    Text,
    StatLabel,
    Image,
    StatNumber,
    StatHelpText,
    StatArrow,
    Divider,
    StatGroup,
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
    CardBody, UnorderedList, ListItem, Box, Avatar, IconButton, TagLabel, Tag
} from "@chakra-ui/react";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowRight, faGlobe, faSchool} from "@fortawesome/free-solid-svg-icons"
import Feedbar from "@/components/feedbar";

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
                    <Tab>🏫 선린고 소프트웨어과</Tab>
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
                                            3.12<br/>
                                            메세지 올리는시간 변경<br/>
                                            새벽5시 {'>'} 오후6시<br/><br/>
                                            숙제<br/>
                                            -수학21p 풀어오기(5번제외(가능하면 하공))<br/>
                                            가정통신문<br/>
                                            -학부모공개수업 참석여부
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
                        <p>Yeah yeah. What's up?</p>
                    </TabPanel>
                    <TabPanel>
                        <p>Oh, hello there.</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
        </Flex>
    </main>
  );
}
