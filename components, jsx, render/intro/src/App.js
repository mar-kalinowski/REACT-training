import { firstComponent } from "./components/FirstComponent";
import { Avatar } from "./components/Avatar";
import { Misc } from "./components/Misc";
import { Howdy } from "./components/Howdy";
import { ImageWrapper } from "./components/ImageWrapper";
import { FancyBorder } from "./components/FancyBorder";
import { data } from "./data";
import { User } from "./components/User";
import { Users } from "./components/Users";
// import styled from 'styled-components'

const App = () => {
  
  return (
    <Users />
    // <User />
    // <>
    //   {/* <FancyBorder borderStyle = "2px dashed red"
    //                 display = "flex">
    //       <Avatar
    //         name="Marcin"
    //         icon="⚡"
    //         src="https://avatars.githubusercontent.com/u/94236630?v=4"
    //         age="42"
    //       />
    //       <p>Hej</p>
    //   </FancyBorder> */}
    //   {/* <ImageWrapper src="http://placekitten.com/200/300" /> */}
    //   {/* <Howdy name="Sebastian" />
    //   <h2>Witaj!</h2>
    //   <p>Jesteś pierwszy w kolejce</p>
    //   <Howdy/> */}
    //   {/* <Howdy name={null} />
    //   <Howdy name={undefined} />
    //   <Howdy name={false} /> */}
    //   {/* <Avatar name = "Marcin" icon = "⚡" src="https://avatars.githubusercontent.com/u/94236630?v=4" age = "42"/>
    //   <Avatar name = "Jan" icon = ":-)" src="https://avatars.githubusercontent.com/u/94236630?v=4" age = "42"/> */}
    // </>
  );
};

// const userInput = prompt('Podaj swój wiek')

// const App = () => {
//   const firstElement = <div>Ciekawe czy to działa?</div>;
//   const anotherElement = <p>Motyla noga, to działa!</p>;
//   const noJsx = "Tekst jakiś:";
//   const expression = (Math.random() + 10).toFixed(2);

//   return (
//     <div className="App">
//       Zaczynamy...
//       {firstElement}
//       {anotherElement}
//       <div>
//         <p>{noJsx}</p>
//         {userInput ? <p>{userInput}</p> : <p>Nie podano wartości</p>}
//         <p>{expression}</p>
//       </div>
//     </div>
//   );
// };

export default App;
