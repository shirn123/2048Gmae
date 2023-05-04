import { useMutation } from "react-query";
import { Button,  Checkbox,  Modal, PasswordInput, Space, TextInput, useMantineTheme} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { IconLock } from '@tabler/icons-react';

interface IProps {
    userName:string;
    password:string;
    maxScore:number;
}

export function UserLogin({userName, password}:IProps){

    const {mutate, isLoading, error } = useMutation(
        (post) =>
          fetch(`http://127.0.0.1:8080/InsertToDB?FirstName=${firstName}&LastName=${lastName}&UserName=${user}&Password=${pass}&BestScore=${highestScore}`, {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          }),
        {
          onSuccess: async () => {
            alert("Hello"+ ' ' +firstName + ' ' + "your user added successfully, Enjoy you game :)");
          },
          onError: (error) => {
            console.log(error);
          }
        }
      );
      

    // const userdataState = useQuery('userData',fetchTable);

    const [opened, { open, close }] = useDisclosure(false);
    const [isOpen, setIsOpen] = useState(false);
 
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [user, setUserName] = useState();
    const [pass, setPassword] = useState();
    const [highestScore, sethighestScore] = useState(0)

    const theme = useMantineTheme();


    if(isLoading){
        return (
            <h1>loaading..</h1>
        );
    }
    if(error){
        return(
            <h1>so much BASA you got an ERROR</h1>
        )
        }



    const handleFirstNameChange = (e: any) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e: any) => {
      setlastName(e.target.value);
    }
  
    const handleUserNameChange = (e:any) => {
      setUserName(e.target.value);

    }

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    }
    
    // const calculationScore = (board:number[][]) => {
    //     setmaxScore(board.flat().reduce((sum,score)=>sum!=2?sum+score:score));
    // }
    
    const checkData =()=>{
        let len = Object.keys(userName).length
        for(let i=0; i<= len -1 ; i++){
            let UserNameWithNOSpace = userName[i].replaceAll(' ' , '') 
            if(UserNameWithNOSpace == userName){
                console.log('user alredy taken') 
                alert("Hello"+ ' ' +firstName + ' ' + "the user name you are trying to use alredy taken please try again :(");
                break    
            }
            else if(UserNameWithNOSpace != userName && i===len -1){
                console.log('new user')
                //@ts-ignore
                mutate({FirstName:firstName,LastName:lastName,UserName:user,Password:pass,BestScore:highestScore})    
        }
        }
        console.log('done')  
    }


    const LogInModal = () =>{
        const len = Object.keys(userName).length
        for(let i=0; i<= len ; i++){
            const UserNameWithNOSpace = userName[i].replaceAll(' ' , '') 
            const PasswordWithNOSPace = password[i].replaceAll(' ' , '') 
            // if(UserNameWithNOSpace == userName && PasswordWithNOSPace == password){
            //     const YourBestScore = userdataState.data.BestScore[i]
            //     // update(YourBestScore)
            //     console.log(YourBestScore)
            //     alert("hi")
            //     return YourBestScore
            //     }
             if(UserNameWithNOSpace == userName && PasswordWithNOSPace != password || UserNameWithNOSpace != userName && PasswordWithNOSPace == password){
                alert("one or more diteils is not correct please try again")
                setIsOpen(true)
            }
            //add a condition that says that you dont have an account and askes for sign in first
            else {(console.log('no'))}
        }
        // console.log('no')  
    }

    return(
        <div>
            <Modal opened={opened} onClose={close} title="Registeration"
            overlayProps={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.4, blur: 2,}}>
                <form>
                    <TextInput
                    label="First Name"
                    placeholder="Your first Name"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                    />
                    <TextInput
                    label="Last Name"
                    placeholder="Your last Name"
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                    />
                    <TextInput
                    label="Your user Name"
                    placeholder="User Name"
                    value={user}
                    onChange={handleUserNameChange}
                    required
                    />
                    <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={pass}
                    onChange={handlePasswordChange}
                    required
                    icon={<IconLock size="1rem" />}
                    />
                    <Space h="xs"></Space>  
                    <Checkbox label="I agree that Shir Naftaliev is the queen" checked readOnly/>
                    <Space h="xs"></Space>  
                    <Button compact variant="subtle" onClick={()=>{setIsOpen(true);close();}}>Have an account? Login</Button>
                    <Space h="xs"></Space>              
                    <Button type="submit" variant="outline"
                    onClick={() => { close(); checkData();}}
                        >sign in
                    </Button>
                </form>
                </Modal>
            <Button onClick={open} variant="subtle" color="gray" size="sm" radius="lg">Login</Button>

        <Modal id="login" opened={isOpen} onClose={() => setIsOpen(false)} title="Hello, Please Log in "
            overlayProps={{ color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2], opacity: 0.4, blur: 2,}}>
                <form>
                    <TextInput
                    label="Your user Name"
                    placeholder="User Name"
                    value={user}
                    onChange={handleUserNameChange}
                    required
                    />
                    <PasswordInput
                    label="Password"
                    placeholder="Password"
                    value={pass}
                    onChange={handlePasswordChange}
                    required
                    icon={<IconLock size="1rem" />}
                    />
                    <Space h="xs"></Space>              
                    <Button type="submit" variant="outline"
                    onClick={() => { setIsOpen(false); LogInModal(); }}
                        >Login
                    </Button>
                </form>
                </Modal>
                
              </div>
    )
}

