function Login(){
    var logincheck = document.getElementById('getlogininfo').value;
    document.getElementById('logininfoError').innerHTML = '';

    
    if(logincheck == ''){
        document.getElementById('logininfoError').innerHTML ='Please Enter a Mobile or Email';     
        }
         else if(logincheck == localStorage.mobile || logincheck == localStorage.email){
          location.href = './Homepage.html'
          }
         else{
          document.getElementById('logininfoError').innerHTML ='Wrong email/ mobile or account doesnt exits ';          
     }
}