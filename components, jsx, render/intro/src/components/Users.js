// import { data as users } from "../data";

// export const Users = () => {
//     return users.map(user => (
//         <div>
//             <h2>{user.firstName}</h2>
//             <a href= {`mailto: ${user.email}`}>{user.email}</a>
//         </div>
//     ))
// }

// import { data as users } from "../data";

// export const Users = () => {
//     return users.map(user => (
//         <div key={user.id}>
//             <h2>{user.firstName}</h2>
//             <a href={`mailto: ${user.email}`}>{user.email}</a>
//         </div>
//     ))
// }

// import { data as users } from "../data";

// export const Users = () => {
//     return users.map(user => (
//         <div key={user.id} style={{width: '300px',display: 'flex', flexWrap: 'wrap', justifyContent: 'center', boxShadow: 'rgba(0, 0, 0, 0.24) 0px, 3px 8px', margin: '15px', borderRadius: '5px', paddding: '5px'}}>
//             <h2>{user.firstName} {user.lastName}</h2>
//             <a href={`mailto: ${user.email}`} style={{color: 'chocolate', textDecoration: 'none'}}>{user.email}</a>
//             <img src={user.avatar}/>
//         </div>
//     ))
// }

// import { data as users } from "../data";

// export const Users = () => {
//     return users.map(user => (
//         <div key={user.id}>
//             <h2>{user.firstName} {user.lastName}</h2>
//             <a href={`mailto: ${user.email}`}>{user.email}</a>
//             <img src={user.avatar}/>
//         </div>
//     ))
// }
import { data as users } from "../data";

export const Users = () => {
    return users.map(user => (
        <div key={user.id} style={{width: '400px', display: 'flex',flexDirection: 'column', margin: '15px', border: '2px solid black', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius: '5px', justifyContent: 'center' }}>
            <h2>{`User surname: ${user.lastName}`}</h2>
            <p>{`User name: ${user.lastName}`}</p>
            <img src={user.avatar} style={{width: '100px',}}/>
            <a href={`mailto: ${user.email}`}>{user.email}</a>
        </div>
    ))
} 


















































































