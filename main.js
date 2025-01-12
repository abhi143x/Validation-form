const form = document.getElementById('form');
const Username = document.getElementById('username');
const email = document.getElementById('Email');
const phone = document.getElementById('P.Number');
const password = document.getElementById('Password');
const Cpassword = document.getElementById('Cpassword');

form.addEventListener('Submit',(Event)=> {
Event.preventDefault();
ValidityState();
})


const validate = () => {
const Username = Username.value.trim();
const email = email.value.trim();
const phone = phone.value.trim();
const password = password.value.trim();
const Cpassword = Cpassword.value.trim();

if(Username === ""){
    setErrormsg(Username, 'username cannot be blank');
}else if(Username.length<=2){
    setErrormsg(Username,'username min 3 char');
}else{
    setSuccessMsg(Username);
}
 if (email === "") {
    setErrormsg(email, 'email cannot be blank');
 }else if (!isEmail(email)){
    setErrormsg(email,'email min')
 }
}
