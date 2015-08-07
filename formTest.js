 //dictionary to store our usernames
//and passwords
var accounts={"test":"password"};
function testLogin()
{
    var login=document.forms["loginForm"]["login"].value;
    var pwd=hashCode(document.forms["loginForm"]["password"].value); 
    //check if the key is in my dictionary
        if(login in accounts)
        {
            //var  hashPassword= hashCode(pwd);
            alert("your password is"+ pwd);
//            alert("you da user");
//            redirect();
            //see if pwd matches for that username
            if(pwd===accounts[login])
            {
                alert("congratssss");
                redirect();
            }
            else{
                alert("stop hacking")
              }
        }
        else
        {
            alert("stop hacking u blackhat ratskallion. BECOME ONE WITHIN");
            accounts[login]=pwd;
            
        }
}

var hashCode = function(str){
    var hash = 0;
    if (str.length == 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}
 
 function validateForm()
   {
      var login=document.forms["loginForm"]["login"].value;
      var pwd=document.forms["loginForm"]["password"].value;
//       if (login==="vale" && login==="vale"){
//           alert("password correct");
//           redirect();
//           return true;
       
       
      if (login==null || login=="")  {
         alert("Please enter a login");
         return false;
       }
      if (pwd==null || pwd=="")  {
         alert("Please enter a password");
         return false;
      }
   }

function resetLoginForm()
   {
       
       document.forms["loginForm"]["login"].value="";
       document.forms["loginForm"]["password"].value="";
   }
function redirect() {

	window.location = "file://buffalo.cs.fiu.edu/homes/Documents/LoginFormStarter/vale-index%20(2).html";
    
}
function testDictionaries()
{
    //this is a list
    var testList=[];
    //this is a dictionary
    var testDictionary = {"one":"First","two":"Second","three":"Third"};
    //add four to our dictionary
    testDictionary["four"] = "Fourth";
    
    for(key in testDictionary)
    {
        alert("key;"+key+"value:"+testDictionary[key]);
    }
}

//var password = "please";
//var x = prompt("Enter in the password "," ");
//if (x.toLowerCase() == password) {
//  alert("Come right in \n \n You've entered in the right password");
//  window.location = "index.htm";
//}
//else {
//  window.location = "bad.htm";
//}