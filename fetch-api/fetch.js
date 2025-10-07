async function getUsers(){
    try{
       let respones = await fetch('https://jsonplaceholder.typicode.com/users');
       let users = await respones.json();

       console.log("first 5 users");
       users.slice(0,5).forEach(usr => {
        console.log(`#${usr.id}: ${usr.username}`);
        

       })
       
    }catch (error){
        console.error("error fetching users:",error);
        
    }
}
getUsers();