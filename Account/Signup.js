function Signup(){
  var firstname = document.getElementById('firstname').value;
  var lastname = document.getElementById('lastname').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var mobile = document.getElementById('mobile').value;
  var referalcode = document.getElementById('referalcode').value;
  var whatsappcheck = document.getElementById('whatsappcheck').value;
  document.getElementById('firsterror').innerHTML = '';
  document.getElementById('seconderror').innerHTML = '';
  document.getElementById('thirderror').innerHTML = '';
  document.getElementById('fortherror').innerHTML = '';
  document.getElementById('fiftherror').innerHTML = '';

  if( firstname =='' && email == "" && password =="" &&  mobile =="" ){
    document.getElementById('firsterror').innerHTML = 'Enter First Name';
    document.getElementById('thirderror').innerHTML = 'Enter Mobile';
    document.getElementById('fortherror').innerHTML = 'Enter Email';
    document.getElementById('fiftherror').innerHTML = 'Create Password';
  }
  else if( firstname == ''){
      document.getElementById('firsterror').innerHTML = "Enter Firstname";
  }
  else if( mobile ==''){
    document.getElementById('thirderror').innerHTML = "Enter Mobile";
}
else if( mobile.length != 10){
  document.getElementById('thirderror').innerHTML = "Please enter a valid mobile number (eg. 9987XXXXXX)";
}
  else if( email == ''){
      document.getElementById('fortherror').innerHTML = "Enter Email";
  }
  else if( password == ''){
      document.getElementById('fiftherror').innerHTML = "Enter a Password";
  }
  else if( password.length < 8){
      document.getElementById('fiftherror').innerHTML = "Use 8 characters or more";
  }
  else if(mobile == localStorage.mobile){
    document.getElementById('thirderror').innerHTML = "Account allready exists";
  }
  else if(email == localStorage.email){
    document.getElementById('fortherror').innerHTML = "Account allready exists";
  }
 
  else{
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mobile = document.getElementById('mobile').value;
    var referalcode = document.getElementById('referalcode').value;
    var whatsappcheck = document.getElementById('whatsappcheck').value;
      localStorage.setItem('firstname',firstname);
      localStorage.setItem('lastname',lastname);
      localStorage.setItem('password',password);
      localStorage.setItem('email',email)
      localStorage.setItem('mobile',mobile);
      localStorage.setItem('referalcode',referalcode);
      localStorage.setItem('whatsappcheck',whatsappcheck);
      location.href = './Login.html'
  }
  
}
