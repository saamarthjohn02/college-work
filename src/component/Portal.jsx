import ReactDOM from 'react-dom'
export default function Portal(){
    return(
        ReactDOM.createPortal(
            <>
            <h2>This Is Portal</h2>
            <p> lorem ipsum dolor sit </p>
            </>,document.getElementsByClassName("another-root")[0]
            
        )
    )
}