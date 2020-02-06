function validate()
{

var cardform = document.getElementById("card").value;
var securityform = document.getElementById("sec").value;
var cardholderform = document.getElementById("cardholder").value;
var monform = document.getElementById("mon").value;
var yearform = document.getElementById("dat").value;
var addressform = document.getElementById("address").value;
var address2form = document.getElementById("address2").value;
var address3form = document.getElementById("address3").value;
var townform = document.getElementById("town").value;
var regionform = document.getElementById("region").value;
var postalform = document.getElementById("postal").value;
var countryform = document.getElementById("country").value;
var numberform = document.getElementById("number").value;
var emailform = document.getElementById("email").value;

if(cardform.length!="16")
{
    alert("Enter valid card number");
    return false;
    
}
for(i=0;i<cardform.length;i++)
{
    if(cardform[i]!="1" && cardform[i]!="2"&& cardform[i]!="3" && cardform[i]!="4" && cardform[i]!="5" && cardform[i]!="6" && cardform[i]!="7" && cardform[i]!="8" && cardform[i]!="9" && cardform[i]!="0" )
     {
       alert("Enter valid card number");
       return false;
        
     }
}
if (securityform.length!="6")
{
    alert("Invalid security code");
    return false;
    
}

 if(cardholderform.length == "0")
{
    alert("Enter CardHolder's name"); 
    return false;
     
}

for(i=0;i<cardform.length;i++)
{
    if(cardform[i]=="1" && cardform[i]=="2"&& cardform[i]=="3" && cardform[i]!=="4" && cardform[i]=="5" && cardform[i]=="6" && cardform[i]=="7" && cardform[i]=="8" && cardform[i]=="9" && cardform[i]=="0" )
     {
       alert("Enter valid CardHolder's name");
       return false;
       
     }
}


 if(addressform.length == "0")
{
    alert("Enter Proper address");
    return false;  
    
}
if(townform.length == "0")
{
    alert("Enter your town");
    return false;
    
}
if(postalform.length != "6")
{
    alert("Enter valid postal code");
    return false;
    
}
if(emailform.length == "0")
{
    alert("Enter your email address");
    return false;
     
}
  
var atposition=emailform.indexOf("@");  
var dotposition=emailform.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=atposition.length)
{  
  alert("Please enter a valid e-mail address"); 
  return false; 
  
} 
else
{
    
alert("Thank you Order Placed");
return true;
}
    
    
    
    
  



}