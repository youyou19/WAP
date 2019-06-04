
var accountInfoList=[];
var account=function(){
  var accountName;
  var accountDeposit;
  var name=function(){
      return accountName; 
  };
  var deposit=function(){
     return accountDeposit; 
  };
   var createAcc=function(name, deposit){
     accountName=name;
     accountDeposit=deposit;
   };
   var toStr=function(){
     return "Account Name:"+accountName+" \tBalance:"+accountDeposit+"\n";  
   };
   return {
       getAccountName:name,
       getAccountDeposit:deposit,
       createAccount:createAcc,
       toString:toStr
   };
   
};
function onCreateAccount(){
    var name=document.getElementById("nameAccount").value;
   var deposit=document.getElementById("depositAccount").value;
 
  var acc =account();
acc.createAccount(name,deposit);
accountInfoList.push(acc);  
print_r();

};

function print_r() {
   var textarea=document.getElementById("mytextarea");
    var output="";
      for(var i=0; i<accountInfoList.length;i++){
        output+=accountInfoList[i].toString();
    }
   
    textarea.value =output;
   }

function pageLoad() {
    document.getElementById("createAccount").onclick = onCreateAccount;
}

window.onload = pageLoad;
