type PersonProps = {
    name: {
        first: string,
        last:string
    }
}


function Person(props: PersonProps) {
  return (
   <h3>
    {props.name.first} {props.name.last} 
   </h3>
  )
}

export default Person