export const Howdy = (props) => {
    return (
    <>
    <h1>Cześć {props.name}!</h1>
    {props.children}
    </>
    )
}