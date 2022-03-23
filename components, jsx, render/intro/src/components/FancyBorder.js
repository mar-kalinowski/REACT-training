export const FancyBorder = (props) => {
    return (
        <div 
            style= {{
                display: props.display,
                alignItems: props.alignItems,
                border: props.borderStyle
                }}
        >
            {props.children}
        </div>
    )
}

FancyBorder.defaultProps = {
    display: "block",
    alignItems: "center"
}