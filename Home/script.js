const readMore1 = document.querySelector('.js-read-more1')
const infoBox1 = document.querySelector('.js-info-box1')
const infoBoxClose1 = document.querySelector('.js-info-box__close1')
const auth = document.getElementById("auth");
var userApi= 'https://6246f1afe3450d61b004d310.mockapi.io/users';
if(localStorage.getItem("info")){
    const info = JSON.parse(localStorage.getItem("info"));
    
    auth.classList.remove("navbar__login-signup");
    auth.classList.add("navbar__logout");

    auth.innerHTML = info.name;
}

const logout = document.querySelector('.navbar__logout');
if(logout){
    logout.addEventListener('click', clickLogout);
    function clickLogout () {
        localStorage.clear();
        window.location.reload(true)
    }
}

function showInfoBox1(){
    infoBox1.classList.add('open')
}
function closeInfoBox1(){
    infoBox1.classList.remove('open')
}

readMore1.addEventListener('click', showInfoBox1)
infoBoxClose1.addEventListener('click', closeInfoBox1)

const readMore2 = document.querySelector('.js-read-more2')
const infoBox2 = document.querySelector('.js-info-box2')
const infoBoxClose2 = document.querySelector('.js-info-box__close2')

function showInfoBox2(){
    infoBox2.classList.add('open')
}
function closeInfoBox2(){
    infoBox2.classList.remove('open')
}

readMore2.addEventListener('click', showInfoBox2)
infoBoxClose2.addEventListener('click', closeInfoBox2)

const readMore3 = document.querySelector('.js-read-more3')
const infoBox3 = document.querySelector('.js-info-box3')
const infoBoxClose3 = document.querySelector('.js-info-box__close3')

function showInfoBox3(){
    infoBox3.classList.add('open')
}
function closeInfoBox3(){
    infoBox3.classList.remove('open')
}

readMore3.addEventListener('click', showInfoBox3)
infoBoxClose3.addEventListener('click', closeInfoBox3)

const readMore4 = document.querySelector('.js-read-more4')
const infoBox4 = document.querySelector('.js-info-box4')
const infoBoxClose4 = document.querySelector('.js-info-box__close4')

function showInfoBox4(){
    infoBox4.classList.add('open')
}
function closeInfoBox4(){
    infoBox4.classList.remove('open')
}

readMore4.addEventListener('click', showInfoBox4)
infoBoxClose4.addEventListener('click', closeInfoBox4)

const readMore5 = document.querySelector('.js-read-more5')
const infoBox5 = document.querySelector('.js-info-box5')
const infoBoxClose5 = document.querySelector('.js-info-box__close5')

function showInfoBox5(){
    infoBox5.classList.add('open')
}
function closeInfoBox5(){
    infoBox5.classList.remove('open')
}

readMore5.addEventListener('click', showInfoBox5)
infoBoxClose5.addEventListener('click', closeInfoBox5)

let modal = document.querySelector('.modal')
let loginBtn = document.querySelector('.navbar__login-signup')
let closeAuthForms = document.querySelectorAll('.auth-form__controls-back')
let modalOverlay = document.querySelector(".modal__overlay")
let switchBtns = document.querySelectorAll(".auth-form__switch-btn")
let authForms = document.querySelectorAll(".auth-form")
const register = document.getElementById('register');
//register
function remove_user(){
    fetch(userApi).then(function(response){
        response.json().then(function(users) {
           users.pop();
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
}
register.onclick = () => {
    //email, name, password từ ô input người dùng nhập
     const email = document.getElementById('register__email');
     const password = document.getElementById('register__password');
     const name = document.getElementById('register__name');
    const infoUser = {
        name:name.value,
        email: email.value,
        password: password.value
    }
    if(name.value == ""||email.value == ""||password.value == "") {
        alert('Không Được Để Trống Các Trường');
    }else{
        fetch(userApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(infoUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('đăng kí thành công');
                window.location.href = './index.html';
            })
            .catch(error => {
                console.log(error)
        })
    }
    
}

// Mở modal
if(loginBtn){
        loginBtn.addEventListener('click', () =>
        modal.style.setProperty("display","flex")
    )
}

// Đóng modal
function hideForm() {
    modal.style.setProperty("display","none")
}
for (let closeAuthForm of closeAuthForms){
    closeAuthForm.addEventListener('click', hideForm)
}
modalOverlay.addEventListener('click', () =>
    modal.style.setProperty("display","none")
)


// Chuyển giữa modal đăng nhập và đăng ký
function signup(){
    document.querySelector('.auth-form2').style.display = "none";
    document.querySelector('.auth-form1').style.display = "block";
}

function signin(){
document.querySelector('.auth-form1').style.display = "none";
document.querySelector('.auth-form2').style.display = "block";
}


// login
// fetch(userApi).then(function(response){
//     return response.json;
// }).then(function(users){
//     console.log('user:' +users);
// })

const email_input = document.querySelector('.email_input');
const password_input = document.querySelector('.password_input');
const btn_login = document.querySelector('.btn_login');
const nav_login = document.querySelector('.nav_login');
fetch(userApi).then(function(response){
    response.json().then(function(users) {
        btn_login.onclick = () =>{
            let check = false;
            for(value of users){
                if(email_input.value == 'admin@gmail.com' && password_input.value == '123'){
                    window.location.assign('/admin/admin.html');
                    check = true;
                    break;
                }
                if(email_input.value == value.email && password_input.value == value.password){
                    check = true;
                    const info = {
                        name: value.name,
                        email: value.email
                    }
                    localStorage.setItem("info", JSON.stringify(info));
                    window.location.href = "../index.html";
                   break;
                }
            }
            if(check == false){
                alert('sai email hoặc mật khẩu');
            }
            
        }
    });
}).catch(function(error) {
    console.log('Fetch Error:', error);
});
