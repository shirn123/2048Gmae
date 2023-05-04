import { useState } from 'react'
import { Board } from './Board'
import { NavigationBar } from './Navbar/NavigationBar'
// import { useLocalStorage } from '@mantine/hooks'


function Game({userdata}: any) {

    // const [userDataStorege, setuserDataStorege] = useLocalStorage({key: 'user', defaultValue: userdata } )
    const [maxScore, setMaxScore] = useState(userdata.BestScore)

  return (
    <div>
      <NavigationBar userName={userdata.UserName} password={userdata.Password} maxScore = {maxScore}/>
      <Board maxScore = {maxScore} setMaxScore = {setMaxScore}/>
    </div>
  )
}

export default Game