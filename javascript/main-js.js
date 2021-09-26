const openNavMobileBtn = document.querySelector('.nav__mobile__icon');
const closeNavMobileBtn = document.querySelector('.close-nav-mobile')
const modal = document.querySelector('.modal');
const navMobileContent = document.querySelector('.nav__mobile__content')


openNavMobileBtn.addEventListener('click', () => {
  
    modal.classList.add('active');
    navMobileContent.classList.add('active');
})
closeNavMobileBtn.addEventListener('click', () => {
    
    modal.classList.remove('active');
    navMobileContent.classList.remove('active');
})

const btnLogin = document.querySelector('.user__login');
const btnCloseLogin = document.querySelector('.login__form__btn-close');
const btnSignUp = document.querySelector('.user__sign-up');
const btnCloseSignUp = document.querySelector('.sign-up__form__btn-close');
const btnHaveAccount = document.querySelector('.sign-up__go-login__link');
const userModal = document.querySelector('.user__modal');
const contentLoginForm = document.querySelector('.user__login__form');
const contentSignUpForm = document.querySelector('.user__sing-up__form');



function resetForm(num){
    document.querySelector(`.email__login__message-fail-${num}`).classList.remove('active');
    document.querySelector(`.email__login__message-empty-${num}`).classList.remove('active');
    document.querySelector(`.password__login__message-fail-${num}`).classList.remove('active');
    document.querySelector(`.password__login__message-empty-${num}`).classList.remove('active');
    document.querySelectorAll('input').forEach(e=> e.style.borderColor="#BBBDBF")
}

btnLogin.addEventListener('click', () => {
    userModal.classList.add('active');
    contentLoginForm.classList.add('active');
})
btnCloseLogin.addEventListener('click', () => {
    userModal.classList.remove('active');
    contentLoginForm.classList.remove('active');
    contentLoginForm.reset();
    resetForm(1);
})
btnSignUp.addEventListener('click', () => {
    userModal.classList.add('active');
    contentSignUpForm.classList.add('active');
})
btnCloseSignUp.addEventListener('click', () => {
    userModal.classList.remove('active');
    contentSignUpForm.classList.remove('active');
    contentSignUpForm.reset();
    resetForm(2);
})
btnHaveAccount.addEventListener('click', () => {
    contentSignUpForm.classList.remove('active');
    contentLoginForm.classList.add('active');
    contentLoginForm.reset();
})

const loginBtnMobile = document.querySelector('.nav__mobile__icon__user');
const loginBtnMobileClose = document.querySelector('.user__modal__mobile__image__icon-close');
const modalUserFormMobile = document.querySelector('.user__modal__mobile');
const contentLoginMobile = document.querySelector('.user__mobile__login__form');
const contentSignupMobile = document.querySelector('.user__mobile__sign-up__form');
const linktoSignupMobile = document.querySelector('.user__mobile__login__form__no-account__link');
const linktoLoginMobile = document.querySelector('.user__mobile__sign-up__form__no-account__link')

loginBtnMobile.addEventListener('click', ()=>{
    modalUserFormMobile.classList.add('active');
    contentLoginMobile.classList.add('active');
})

loginBtnMobileClose.addEventListener('click', ()=>{
    modalUserFormMobile.classList.remove('active');
    contentLoginMobile.classList.remove('active');
    contentSignupMobile.classList.remove('active');
    contentLoginMobile.reset();
    resetForm(3);
})

linktoSignupMobile.addEventListener('click', ()=>{
    contentLoginMobile.classList.remove('active')
    contentSignupMobile.classList.add('active');
    contentLoginMobile.reset();
    resetForm(4);
})
linktoLoginMobile.addEventListener('click', ()=>{
    contentSignupMobile.classList.remove('active');
    contentLoginMobile.classList.add('active');
    contentSignupMobile.reset();
    resetForm(3);
})

const userSocialMobile = document.querySelector('.user__mobile__login__form__social');
const userSocialSigupMobile = document.querySelector('.user__mobile__sign-up__form__social');
const userLoginSocialPC = document.querySelector('.login__form__social');
const userSignupSocialPC = document.querySelector('.sign-up__form__social');
const contentToastMessage = document.querySelector('.toast-message');
const closeToastMessage = document.querySelector('.toast-message__content__close__btn');

userSocialMobile.addEventListener('click',()=> {
    contentToastMessage.classList.add('active');
    setTimeout(()=>{
        contentToastMessage.classList.remove('active');
    },3000)
})
userLoginSocialPC.addEventListener('click',()=> {
    contentToastMessage.classList.add('active');
    setTimeout(()=>{
        contentToastMessage.classList.remove('active');
    },3000)
})
userSignupSocialPC.addEventListener('click',()=> {
    contentToastMessage.classList.add('active');
    setTimeout(()=>{
        contentToastMessage.classList.remove('active');
    },3000)
})
userSocialSigupMobile.addEventListener('click',()=>{
    contentToastMessage.classList.add('active');
    setTimeout(()=>{
        contentToastMessage.classList.remove('active');
    },3000)
})

closeToastMessage.addEventListener('click',()=>{
    contentToastMessage.classList.remove('active');
})

const inputLogin = document.querySelector('#email-login');

function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
        return (true)
    }
    return (false)
}

function validateFormEmail(id, num){
    const messageEmailFail = document.querySelector(`.email__login__message-fail-${num}`);
    const messageEmailEmpty = document.querySelector(`.email__login__message-empty-${num}`);
    const valueEmail = document.querySelector(`#${id}`).value.trim();
    const checkMail = ValidateEmail(valueEmail);

    if (valueEmail.length === 0 || checkMail === false)
    {
        if (valueEmail.length === 0){
            document.querySelector(`#${id}`).style.borderColor = "red";
            messageEmailFail.classList.remove('active');
            messageEmailEmpty.classList.add('active');
        }
        else{
            document.querySelector(`#${id}`).style.borderColor = "red";
            messageEmailEmpty.classList.remove('active');
            messageEmailFail.classList.add('active');
        }
    }
    else{
        messageEmailEmpty.classList.remove('active');
        messageEmailFail.classList.remove('active');
        
        document.querySelector(`#${id}`).style.borderColor = "#BBBDBF";
    }
}

function validateFormPassword(id, num){
    const messagePasswordFail = document.querySelector(`.password__login__message-fail-${num}`);
    const messagePasswordEmpty = document.querySelector(`.password__login__message-empty-${num}`);
    const valuePassword = document.querySelector(`#${id}`).value.trim();
    
    if (valuePassword.length < 8){
        if (valuePassword.length === 0){
            document.querySelector(`#${id}`).style.borderColor = "red";
            messagePasswordFail.classList.remove('active');
            messagePasswordEmpty.classList.add("active");
        }
        else{ 
            document.querySelector(`#${id}`).style.borderColor = "red";
            messagePasswordEmpty.classList.remove('active');
            messagePasswordFail.classList.add('active');
        }
    }
    else{
        document.querySelector(`#${id}`).style.borderColor = "#BBBDBF";
        messagePasswordEmpty.classList.remove('active');
        messagePasswordFail.classList.remove('active');
    }
}

function handelSubmit(email, password, num){
    validateFormEmail(email, num);
    validateFormPassword(password, num);
}

//Tab Product
const tabs = document.querySelectorAll('.product-list-tab-items');
const panes = document.querySelectorAll('.product-list-pane');

tabs.forEach(tab => {
    tab.addEventListener('click', e => {
        const tabElement = e.currentTarget;
        const dataTab = tabElement.dataset.nametab;

        panes.forEach(pane => {
            pane.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })

        tabElement.classList.add('active');
        document.querySelector(`#${dataTab}`).classList.add('active');
    })
})




