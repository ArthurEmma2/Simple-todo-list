type RandomNumberType = {
    value:number
}

type PositiveNum = RandomNumberType & {
    isPositive?: boolean 
    isNegative?: never
    isZero?: never
}
type NegativeNum = RandomNumberType & {
    isNegative?: boolean 
    isPositive?: never
    isZero?: never
}


type Zero =  RandomNumberType & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps =  PositiveNum | NegativeNum | Zero

export const RandomNumber = ({
    value, 
    isPositive,
    isNegative,
    isZero,
   
}:RandomNumberProps)=>{
    return (
       <div>
        {value} {isPositive && 'positive'} {isNegative && 'negative'} 
        {''}
        {isZero && 'zero'}
       </div>
    )
}