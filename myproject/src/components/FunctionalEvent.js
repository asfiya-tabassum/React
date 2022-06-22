function FuncionalEvent(){
    function handle(){
        console.log("clicked!");
    }
    return (<div>
        try to handle event 
        <button onClick={handle}>clickmee</button>
    </div>);
}

export default FuncionalEvent;