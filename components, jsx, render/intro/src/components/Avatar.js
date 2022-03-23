export const Avatar = (props) => {
    return (
      <div>
        <h3>{props.icon} Twoje imię to: {props.name}</h3>
        <p>Twój wiek to: {props.age}</p>
        <img alt="avatar" src={props.src} width= "40px"/>
      </div>
    )
  };

  Avatar.defaultProps = {
    icon: "⚡"
  };

  