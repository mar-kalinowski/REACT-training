const userInput = prompt('Podaj swój wiek')

const App = () => {
  const firstElement = <div>Ciekawe czy to działa?</div>;
  const anotherElement = <p>Motyla noga, to działa!</p>;
  const noJsx = "Tekst jakiś:";
  const expression = (Math.random() + 10).toFixed(2);
  const FirstComponent = () => null;
  
  return (
    <div className="App">
      Zaczynamy...
      {firstElement}
      {anotherElement}
      <div>
        <p>{noJsx}</p>
        {userInput ? <p>{userInput}</p> : <p>Nie podano wartości</p>}
        <p>{expression}</p>
        <FirstComponent />
      </div>
    </div>
  );
};

export default App;
