export const Misc = () => {
    const firstElement = <h2>Ciekawe czy to działa?</h2>;
    const anotherElement = <p>Motyla noga, to działa 🎉</p>;
    const noJsx = "Teks jakiś: ";
    const nothing = null;
    const expression = (Math.random() + 10).toFixed(2);
  
    return (
      <div>
        Zaczynamy...
        {firstElement}
        {anotherElement}
        <div>
          <p>{nothing}</p>
          <p>{noJsx}</p>
          <p>{expression}</p>
        </div>
      </div>
    );
  };
  
  export default Misc;