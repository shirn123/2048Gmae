import { Button } from '@mantine/core';

export function Tile({tile}: any){
    
    return(
        <div>
            <Button size='xs' sx={() => ({
                backgroundColor:    
                tile==0?'#004870'
                :tile==2?'#99E9F2'
                :tile==4?'#79cfff'
                :tile==8?'#2fb5ff'
                :tile==16?'#8ba7ff'
                :tile==32?'#4773ff'
                :tile==64?'#0034da'
                :tile==128?'#c096ee'
                :tile==256?'#b381eb'
                :tile==512?'#934ce2'
                :tile==1024?'#951ba9'
                :tile==2048?'#a81c8d':''
           })}
                styles={() => ({
                    root: {
                        border: 0,
                        fontSize:
                        tile==64?'1.8rem':
                        tile==128?'1.4rem':
                        tile==256?'1.4rem':
                        tile==512?'1.4rem':
                        tile==1024?'1rem':
                        tile==2048?'1rem':'2rem',
                        width: "5rem",
                        height: "5rem"}})}>
            {tile==0?'':tile}
            </Button>
        </div>
    )
    }

export default Tile