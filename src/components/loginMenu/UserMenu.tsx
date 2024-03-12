import {Avatar, Box, Button, Flex, Heading, Tag, TagLabel, TagLeftIcon, Text} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSchool} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const UserMenu = () => {
  return (
    <Box paddingTop='30px'
         paddingRight='24px' paddingLeft='24px' paddingBottom='20px'>
        <Flex flex='1' gap='4'  flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Box>
                <Heading size='md'>Segun Adebayo</Heading>
                <Text>@sunrin</Text>
            </Box>
            <Tag size='md' key='sm' variant='subtle' colorScheme='cyan'>
                <TagLeftIcon boxSize='12px' as={FontAwesomeIcon} icon={faSchool} />
                <TagLabel>선린인터넷고등학교</TagLabel>
            </Tag>
            <Button size='md' variant='outline' colorScheme='teal' w='100%' marginBottom='1px'>계정 변경하기 / 로그아웃</Button>
            <Button size='md' variant='outline' colorScheme='teal' w='100%'>⚙️ 설정</Button>
        </Flex>
    </Box>
  );
}

export default UserMenu