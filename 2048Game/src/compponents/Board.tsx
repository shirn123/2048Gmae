import {SimpleGrid, Flex, Title, Center, Text, Paper, Space, Button, Box, Divider } from '@mantine/core';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { getEmptyBoard } from '../helpers/BoardManagement';
import { CheckEndGame } from './LoseerOrWinner';
import { StartGame, generateRandom,  } from '../helpers/GenerateRandom';
import { moveLeft } from '../helpers/MoveLefs';
import { moveRight } from '../helpers/MoveRight';
import { moveDown, moveUp } from '../helpers/MoveUpDown';
import { Tile } from './Tile';

interface IProps{
  maxScore : number[];
  setMaxScore:  Dispatch<SetStateAction<Number | null>>;
    
  }


export function Board({maxScore, setMaxScore}: IProps){
    const [board, updateBoard] = useState(StartGame(getEmptyBoard()));
    const [score,setScore]=useState(0)


    const NewGame=()=>{
        updateBoard(StartGame(getEmptyBoard()))
    }
        
    const left = () => {
        const newBoard = moveLeft(board);
        updateBoard(generateRandom(newBoard));
        CheckEndGame(board);
      };

      const right = () => {
        const newBoard = moveRight(board);
        updateBoard(generateRandom(newBoard));
        CheckEndGame(board);
      };
    
      const up = () => {
        const newBoard = moveUp(board);
        updateBoard(generateRandom(newBoard));
        CheckEndGame(board);
      };
    
      const down = () => {
        const newBoard = moveDown(board);
        updateBoard(generateRandom(newBoard));
        CheckEndGame(board);
      };

      const onKeyDown = (e:any) => {
        switch (e.key) {
          case "ArrowLeft":
            left();
            break;
          case "ArrowRight":
            right();
            break;
          case "ArrowUp":
            up();
            break;  
          case "ArrowDown":
            down();
            break;
    
          default:
        }
      };

      // const calculateScore = () =>{
      //   setScore(board.flat().reduce((sum,score)=>sum!=2?sum+score:score))
      //   if(score>maxScore){
      //     setMaxScore(score)

      //   }
      // }

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
    
        return () => {
          window.removeEventListener("keydown", onKeyDown);
        };
      });


      

    return (
        <div>
            <Flex justify="center" align="center" direction="row" wrap="wrap" gap="xs">
                <Title size="3rem">
                  <Text c="white" fw={700} sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>2048</Text>
                </Title>
                <Space w="8.5rem"></Space>
                <Box w={60} h={50}  sx={(theme) => ({backgroundColor: '#003654', padding: theme.spacing.xxs, textAlign: 'center',  borderRadius: theme.radius.md})} >
                  <Text color='#536671' fw={700} size="sm" sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>score</Text>
                  <Space h="0.2rem"></Space>
                  <Text size="xs" lineClamp={2} ta="center" span c="white" inherit sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>{board.flat().reduce((sum,score)=>sum!=2?sum+score:score)}</Text>
                </Box>
                <Box w={60} h={50} sx={(theme) => ({backgroundColor:'#003654', padding: theme.spacing.xxs, textAlign: 'center',  borderRadius: theme.radius.md})} >
                  <Text color='#536671' fw={700} size="sm"  sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>best</Text>
                  <Space h="0.2rem"></Space>
                  <Text size="xs" lineClamp={2} ta="center" span c="white" inherit sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>{maxScore[3]}</Text>
                </Box> 
            </Flex>   

            <Flex justify='center' align='center' direction='row' wrap="wrap" gap="xs">
                <Text color='white' size="sm" sx={{ fontFamily: 'Greycliff CF, sans-serif' }}>Join the member and get to the 2048 tile!</Text>
                {/* <Space w="0.2px?"></Space> */}
                <Button tt="capitalize" w="8.2rem" variant="filled" sx={() => ({
                backgroundColor:'#003654'})}  size="md" compact onClick={NewGame}>new game</Button>
            </Flex>
            <Space h="xs" />
            {CheckEndGame(board)}
            <Flex justify='center' align='center' direction='row' wrap="wrap">
            <Paper shadow='xs'  p='1rem' style={{backgroundColor:'#003654'}}>
              <SimpleGrid cols={4} spacing="md" verticalSpacing="md">
                  {board.map((row)=><>
                  {row.map((tile)=>
                  <Tile tile={tile}/>
                  )}</>)}
              </SimpleGrid>
            </Paper>
            </Flex>
            
            <Center>
              <Divider my="xs" w={300} color='#536671' size={1} orientation="horizontal" labelPosition= 'right'/>
            </Center>
            <Text color='#536671' tt="capitalize">Created by Shir Naftaliev.</Text>  
          </div>
        
    )
}