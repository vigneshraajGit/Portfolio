const nameEl=document.getElementById("fname");
const gmailEl=document.getElementById("email");
const messageEl=document.getElementById("message");
const button=document.getElementById("send"); 

let sender_name,email,message;

function gmailVerify(gmail)
{
    index=gmail.indexOf(`@`);
    if(gmail.slice(index)!="@gmail.com")
        return true;
    return false;
}

button.onclick=function display()
{
    sender_name=nameEl.value;
    email=gmailEl.value;
    message=messageEl.value;
    if(gmailVerify(email))
        window.alert("Please enter valid email");
    else
        console.log(sender_name+`\n`+email+`\n`+message);
    window.alert("See the console!(Press F12)");
}
