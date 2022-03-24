import { data as users } from "../data";

export const Users = () => {
    return users.map(user => (
        <div key={user.id}>
            <h2>{user.firstName}</h2>
            <a href ={`mailto: ${user.email}`}>{user.email}</a>
        </div>
    ))
    
}