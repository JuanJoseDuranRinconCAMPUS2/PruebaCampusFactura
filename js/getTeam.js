let url="http://localhost:41987/Team"

let Myheaders = new Headers({
    "content-Type" : "application/json"
});


export let newTeam = async (recluta)=>{
    try{
       
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(recluta)})
    }catch(error){
        console.log(error)
    }
}

export let deleteTeam = async (id) =>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }catch(error){
        console.log(error)
    }
}