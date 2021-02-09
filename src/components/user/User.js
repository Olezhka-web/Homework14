export default function User(props){
    let {item} = props;
    return(
        <div>
            {item.id}-{item.name}
        </div>
    )
}
