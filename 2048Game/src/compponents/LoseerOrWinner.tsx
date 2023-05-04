import { ExclamationMark } from 'tabler-icons-react';
import { checkWin, isOver } from '../helpers/GameStatus';
import { Flex, Notification} from '@mantine/core';

  // //check how does the game ended
  export const CheckEndGame = (board:number[][]) => {
      

      return(
        <div>
          <Flex justify='center' align='center'>
          {isOver(board)==true?<Notification w="30rem" h="5rem" icon={<ExclamationMark size="1rem" />} title="losser" color="red" variant="filled" withCloseButton={false}>
          you are such a disapointment noting going to come out with you!
          </Notification>:checkWin(board)==true?<Notification w="30rem" h="5rem" title="yeh!" color="teal" variant="filled" withCloseButton={false}>congradulation!! you are the greatest human in this world! i love you. do you want to go out on a date with me?</Notification>:''}
          </Flex>
        </div>
      )
    }