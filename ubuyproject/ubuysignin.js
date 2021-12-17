document.querySelector("#btn").addEventListener("click",signin);
var res=JSON.parse(localStorage.getItem("signupdata"));
function signin(){
    var email=document.querySelector("#ubuyemail").value;
var password=document.querySelector("#ubuypassword").value;
       var count=0;
  if(email=="admin"&&password=="admin"){
      window.location.href="form.html"
  } 
  else{    
    for(var i=0;i<res.length;i++){   
        
  if(res[i].email==email&&res[i].password==password){
            count++;
            window.location.href="header.html"
        }   
    }
    if(count==0){
        alert("you entered wrong credentials")
    
}
  }
}