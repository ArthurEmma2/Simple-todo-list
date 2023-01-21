import React from 'react'
import Greet from './components/Greet'
import Person from './components/Person'
import PersonList from './components/PersonList'
import Status from './components/Status'
import Header from './components/Header'
import Oscar from './components/Oscar'
import Button from './components/Button'
// import Input from './components/input'
import Container from './components/Container'
import LoggedIn from './components/state/LoggedIn'
import User from './components/state/User'
import Counter from './components/state/Counter'


const PersonaArray = [
  {
    First: "Emmanuel",
    Last: "arthur",
   
  },
  {
    First: "Emmanuel",
    Last: "kwaku",
   
  },
  {
    First: "manuel",
    Last: "gasho",
   
  }

]
 
   
 



function App() {
  const personName = {
    first: "arthur",
    last: "Emmanuel"
  }
  return (
    <main>
      <Oscar>
      <Header>oscar text</Header>
      </Oscar>
    <LoggedIn />
    <User />
      <Container  styles={{border:"1px solid black", padding: "1rem" }}/>
      <Header>Placeholder text</Header>
      <Status  status="error"/>
      <Greet  messageCount={45} name="Emmanuel" isLoggedIn={true} />
      <Person  name={personName} />
      <Counter />
      {/* <Button handleClick={(event, id) => {
        console.log("hey you clicked a button", event, id)
      }} />
      <PersonList  names={PersonaArray} /> */}
    </main>
  )
}

export default App