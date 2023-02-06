// // import React from 'react'
// // import Greet from './components/Greet'
// // import Person from './components/Person'
// // import PersonList from './components/PersonList'
// // import Status from './components/Status'
// // import Header from './components/Header'
// // import Oscar from './components/Oscar'
// // import Button from './components/Button'
// // // import Input from './components/input'
// // import Container from './components/Container'
// // import LoggedIn from './components/state/LoggedIn'
// // import User from './components/state/User'
// // import Counter from './components/state/Counter'


// // const PersonaArray = [
// //   {
// //     First: "Emmanuel",
// //     Last: "arthur",
   
// //   },
// //   {
// //     First: "Emmanuel",
// //     Last: "kwaku",
   
// //   },
// //   {
// //     First: "manuel",
// //     Last: "gasho",
   
// //   }

// // ]
 
   
 



// // function App() {
// //   const personName = {
// //     first: "arthur",
// //     last: "Emmanuel"
// //   }
// //   return (
// //     <main>
// //       <Oscar>
// //       <Header>oscar text</Header>
// //       </Oscar>
// //     <LoggedIn />
// //     <User />
// //       <Container  styles={{border:"1px solid black", padding: "1rem" }}/>
// //       <Header>Placeholder text</Header>
// //       <Status  status="error"/>
// //       <Greet  messageCount={45} name="Emmanuel" isLoggedIn={true} />
// //       <Person  name={personName} />
// //       <Counter />
// //       {/* <Button handleClick={(event, id) => {
// //         console.log("hey you clicked a button", event, id)
// //       }} />
// //       <PersonList  names={PersonaArray} /> */}
// //     </main>
// //   )
// // }

// // export default App

// import React from 'react'
// import UserContextProvider from './components/context/UserContext'
// import User from './components/context/User'
// import Mutable from './components/context/Mutable'
// // import ThemeContextProvider from './components/context/ThemeContext'
// // import Box from './components/context/Box'
// import { Counter } from './components/class/Counter';
// import Private from './components/auth/Private';
// import Profile from './components/auth/Profile';
// import List from './components/generics/List';
// import { RandomNumber } from './randomNum/RandomNum';
// import { Toast } from './randomNum/Toast/Toast';
// // import ButtonCom from './components/Button';




// function App() {
//   return (
//     <div>
//    <UserContextProvider>
//         <User />
//     </UserContextProvider>
//     <Mutable />

//     <Counter  message='hey how are you doing'/>
//     <Private  isLoggedIn={false}  Component={Profile}/>

//     <RandomNumber value ={56}  isPositive />

//     {/* <List 
//     items={[
//       'Batman', 'Superman', 'IronMan'
//     ]}

//     onClick={((item) => console.log(item))}
    
//     />
//     <List 
//     items={[
//       1, 2, 4, 5,
//     ]}

//     onClick={((item) => console.log(item))}
    
//     /> */}
//     {/* <List 
//     items={[
//      {
//       id: 1,
//       first: "arthur",
//       last: "emma"
//      },
//      {
//       id: 2,
//       first: "ATTA",
//       last: "Manuel"
//      },
//      {
//       id: 3,
//       first: "abena",
//       last: "topaz"
//      }
//     ]}

//     onClick={((item) => console.log(item))}
    
//     /> */}

// <Toast position='center - center' />

// {/* <ButtonCom variant="primary" onclick{() => console.log("clicked")}>
// Primary button
// </ButtonCom> */}
//     </div>
 
//     // <ThemeContextProvider>
//     //   <Box />
//     // </ThemeContextProvider>
//   )
// }

// export default App

import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App