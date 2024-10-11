import PropTypes from 'prop-types';

Button.propTypes = {
    value: PropTypes.string.isRequired,
};


function Button({value}){
    
    return (
        <div>
            <button id='btnd' onClick={getAdvice}>{value}</button>
        </div>
    )
}

function getAdvice(){
    let btnd = document.getElementById("btnd");
    btnd.style.background = "red"
}



export default Button