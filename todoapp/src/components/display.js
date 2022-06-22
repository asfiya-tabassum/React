import { browserName } from "react-device-detect";

const display = () => {
    return (
        <div>
            { (browserName === "Firefox") ? (<div
                style={{
                    backgroundColor: 'black',
                }}
            />):(<div
                style={{
                    backgroundColor: 'blue',
                }}
            />)

            }
        </div>
      )
}
 
export default display;
