import { browserName } from "react-device-detect";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../style.module.css';



const Temp = () => {
    console.log(browserName);
    return ( 
    //     <div>
    //         {(browserName === "Chrome") ? (<style>{{backgroundColor:"red"}}</style>) :
    //         (<style>{{backgroundColor:"blue"}}</style>)
    // }
    //     </div>
    
    <div>
        {(browserName === "Chrome")? (<h1 className={styles.colour1}>hello</h1>) :
        (<h1 className={styles.colour2}>hello</h1>)

        }
    </div>
     );
}
 
export default Temp;