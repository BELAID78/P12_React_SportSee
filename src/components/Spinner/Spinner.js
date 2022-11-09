/**
 * Component for render spinner
 * 
 * @returns {React.ReactElement}
 */
function Spinner() {
    return (
        <div className="lds-spinner">
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
    )
}

//no validated props for that component
Error.propTypes = {

}

//no default props for that component
Error.defaultProps = {

}

//export Spinner component
export default Spinner