const Result=({user})=>{
        return(
            <div>
            {/* <h1 className= "text-centre" >RMY USERS</h1> */}
            <table className="table table-striped">
                <tbody>
                    {
                            <tr key={user.uid}>
                                <td>{user.uid}</td>
                                <td>{user.lastName}</td>
                                <td>{user.firstName}</td>
                                <td>{user.address}</td>
                                <td>{user.city}</td>
                                <td>{user.level}</td>

                            </tr>
                        
                    }
                </tbody>

            </table>
            </div>
        )
}

export default Result;