import { firstComponent } from "./components/FirstComponent";
import { Avatar } from "./components/Avatar";
import Misc from "./components/Misc";
import { Howdy } from "./components/Howdy";
import { ImageWrapper } from "./components/ImageWrapper";

const App = () => {
  return (
    <>
    <ImageWrapper src="http://placekitten.com/200/300"/>
    {/* <Howdy name="Sebastian" />
    <Howdy name={null} />
    <Howdy name={undefined} />
    <Howdy name={false} /> */}
    {/* <Avatar /> */}
    </>
  )
}







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
