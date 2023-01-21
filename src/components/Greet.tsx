type GreetProps = {
    name: string
    messageCount:number
    isLoggedIn: boolean
}


function Greet(props: GreetProps) {
  return (
    <div style={{
        textAlign: "center",
        fontSize: "100px",   
    }}>
        {
            props.isLoggedIn ? `Welcome ${props.name}  you have ${props.messageCount} unread messages`: 'welcome guest'
        }
    
    </div>
  )
}

export default Greet

