// const Greet=(props)=>{
//     return <div>{props.name} is {props.age} years old.</div>
// };
// export default Greet;
const Greet=(props)=>{
    let temperature=30;
    function chill(){
        setTemp(temp-1)
    }
    return (
        <div>
            <center>
                <h1>{temp} deg</h1>
                <button>Change Temp</button>
            </center>
        </div>
    )
};
export default Greet;