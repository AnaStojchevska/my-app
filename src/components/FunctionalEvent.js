function FunctionalEvent(){
    function handleClick(){
        console.log('Button is click')
    }
    return(
        <div>
            Functional component 
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
    
}
export default FunctionalEvent;