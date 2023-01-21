type PersonListProps = {
    names:{
      First: string
       Last: string
         
  }[]
  
  }
  function PersonList(props: PersonListProps) {
    return (
      <div> 
     
     {
      props.names.map(name =>{
        return(
          <div>
            {name.First} {name.Last}
          </div>
        )
      })
     }
  
      </div>
         
    )
  }
  
  export default PersonList