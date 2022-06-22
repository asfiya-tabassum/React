import { browserName } from "react-device-detect";

const res = () => {
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
    );
}
 
export default res;