import { data } from "../data";

export const User = () => {
    const user = data[0];
    return (
        <div>
            <h2>{user.firstName}</h2>
            <a href= {`mailto: ${user.email}`}>{user.email}</a>
        </div>
    )
}






















































