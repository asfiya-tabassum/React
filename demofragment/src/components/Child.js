import React from "react"
function Child({count}){
    return(
        <div>
            this is child component {count}
        </div>
    )
}
export default React.memo(Child);