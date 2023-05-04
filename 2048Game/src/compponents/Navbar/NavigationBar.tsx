import { Avatar, Box, Flex, Text, HoverCard } from "@mantine/core";
import './NavBar.css'
import { ExclamationMark, QuestionMark } from "tabler-icons-react";
import { UserLogin } from "../UserLogin";

interface IProps {
    userName:string;
    password:string;
    maxScore:number;
}

export function NavigationBar({userName, password, maxScore}:IProps){
    


    return (
        <div className="topnav">
            <Box>
                <HoverCard>
                    <HoverCard.Target>
                        <a><Avatar size="sm" radius="xl"><QuestionMark size={20} strokeWidth={2} color= "black"></QuestionMark></Avatar></a>
                    </HoverCard.Target>
                    <HoverCard.Dropdown style={{backgroundColor:"#536671"}}>
                        <Text color="#7991b5" size="sm" sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>
                            How to play: Use your arrow keys to move the tiles.<br></br> Tiles with the same number merge into one when they touch.<br></br> Add them up to reach 2048!
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
                <HoverCard>
                    <HoverCard.Target>  
                        <a><Avatar size="sm" radius="xl"><ExclamationMark size={20} strokeWidth={2} color={'black'}></ExclamationMark></Avatar></a>
                    </HoverCard.Target>
                    <HoverCard.Dropdown style={{backgroundColor:"#536671" }}>
                        <Text color="#7991b5" size="sm" sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>
                            NOTE: This site is not the official version of 2048. <br></br> Falcon team gave this project to people who want to be a part of this team. 
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
                <Flex justify="flex-start" align="center" gap="md" direction="row">
                    <b><UserLogin userName={userName} password={password} maxScore = {maxScore}></UserLogin></b>
                </Flex>
            </Box>
        </div>
      
    )
}