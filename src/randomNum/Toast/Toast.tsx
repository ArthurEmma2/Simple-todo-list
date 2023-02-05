type HorizontalPosistion =  'left' | 'center' | 'right'
type VerticalPosistion =  'Top' | 'center' | 'bottom'


type ToastPos  = {
    position: 
    | Exclude<`${HorizontalPosistion} - ${VerticalPosistion}`,  'center-center' | 'center'>
}


export const Toast = ({

 position  
}:ToastPos)=>{
    return (
       <div>
       {position}
       </div>
    )
}