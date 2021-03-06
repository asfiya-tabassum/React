const express=require('express')
const dotenv=require('dotenv')
// const path=require('path')
const {OAuth2Client}=require('google-auth-library');



dotenv.config();

const client=new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);



const app=express();
app.use(express.json());


const users=[];

function upsert(array,item){
    const i = array.findIndex((x)=>x.email==item.email);
    if(i>-1) array[i]=item;
    else array.push(item);
}


app.post('api/google-login',async(req,result)=>{
    const {token}=req.body;
    const ticket=await client.verifyIdToken({
        idToken:token,
        audience:process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    const {name,email,picture}=ticket.getPayload();
    upsert(user,{name,email,picture});  
    result.status(301);
    result.json({name,email,picture});
});


// app.use(express.static(path.join(__dirname, '/build')));
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/build/index.html'))
// );


app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is ready at http://localhost:${process.env.PORT || 5000}`);
});