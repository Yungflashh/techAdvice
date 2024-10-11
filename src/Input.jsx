function Input(){

    

    function run(){
        let input = document.getElementById("input") 
        fetch(`https://yungflashapi.onrender.com/categories?category=${input.value}`)
        .then(data => data.json())
        .then (
            data => {
                return (
                    <p>{data.advice}</p>
                )
            }
            
            
        )
        
    }
    return (
        <div>
            <input id="input" placeholder="Enter a Category" />

            <button onClick = {run}>Submit</button>
        </div>
    )
}



export default Input