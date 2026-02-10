import '../style/Button.css'

function Button(props) {
    let colorAvatar;
    if (props.type === "Friend") {
        colorAvatar = 'conectBottun Friend'
    } else if (props.type === "Teacher") {
        colorAvatar = 'conectBottun Teacher'
    }
    else if (props.type === "Student") {
        colorAvatar = 'conectBottun Student '
    }else{
        colorAvatar = "conectBottun"
    }
    return (
        <button className={colorAvatar}>
            {props.type}
        </button>
    )
}

export default Button