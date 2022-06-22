export default function RenderList(){
    // const pro =["jpmc","hdw","zenq"]
    // const proL=pro.map((p)=><h3>{p}</h3>)
    // return <div>{proL}</div>
    // const pro=[
    //     {id:1,name:"hdw",ctc:12},
    //     {id:2,name:"jpmc",ctc:10},
    //     {id:3,name:"hdw",ctc:19},
    // ]
    // const proL=pro.map((p)=><h3 key={p.id}>{p.name}:{p.ctc}</h3>)
    // return <div>{proL}</div>
    const f=["jpmc","hdw","zenq"]
    const fl=f.map((k,index)=><h3 key={index}>{k}</h3>)
    return <div>{fl}</div>


}