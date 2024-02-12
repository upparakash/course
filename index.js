let gifImg = document.getElementById('gifImg');
let gifSm = document.getElementById('gifSm');

let googleImg = document.getElementById('googleImg');
let googleEle = document.querySelector('#google');

let industryImg = document.getElementById('industryImg');
let industryImgSm = document.getElementById('industryImgSm');

let list = document.getElementsByTagName('li');
let elements = document.querySelectorAll('.list-item');

// elements[0].style.color="#f7b538";
// elements[6].style.color="#f7b538";
// elements[10].style.color="#f7b538";

// otp variables

function validateNumber(number) {
    var regx = /^[6-9]\d{9}$/;
    if (regx.test(number)) {
        return true;
    }
    return false;
}

let otpBtn = document.getElementById('otpBtn');
let bookBtn = document.getElementById('submit');
let verificationContainer = document.getElementById('otpVerifyContainer');
let otpVerifyLoader = document.getElementById('otp-verify-loader');
let otpSentLoader = document.getElementById('otp-sent-loader');
let number = document.querySelector('#whatsapp');
let otpElement = document.getElementById('otp');
let otpCondition = false;
otpBtn.disabled = true;

document.querySelector('#whatsapp').addEventListener('keyup', (e) => {
    e.preventDefault();
    let number = document.querySelector('#whatsapp').value
    if (validateNumber(number) && number.length == 10) {
        otpBtn.disabled = false;
    } else {
        otpBtn.disabled = true;
        document.getElementById('otp-sent').style.display = "none";
        otpBtn.style.display = "block";
        verificationContainer.classList.add('verify-container');
        otpElement.value = "";
        document.getElementById('verified-container').style.display = 'none'
    }
})

otpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    otpSentLoader.style.display = "block";
    otpBtn.style.display = "none";
    try {
        let number = document.querySelector('#whatsapp').value;
        const url = `https://us-central1-cynohub-v3.cloudfunctions.net/sendOTP?number=${number}`;
        axios.get(url).then(res => {
            if (res.data.type = "success") {
                document.getElementById('otp-sent').style.display = "flex";
                otpSentLoader.style.display = "none";
                verificationContainer.classList.remove('verify-container');
            }
        })
    } catch (e) {
        console.log(e);
    }
})

document.querySelector('#otp').addEventListener('keyup', (e) => {
    e.preventDefault();
    if (otpElement.value.length == 4) {
        otpVerifyLoader.style.display = 'block';
        document.getElementById('verified-container').style.display = 'none';
        try {
            const url = `https://us-central1-cynohub-v3.cloudfunctions.net/verifyOTP?number=${number.value}&otp=${otpElement.value}`;
            axios.get(url).then((res) => {
                console.log(res.data)
                if (res.data.type == "success") {
                    otpVerifyLoader.style.display = 'none';
                    document.getElementById('verified-container').style.display = 'flex'
                    document.getElementById('otp-text').innerHTML = "Verified";
                    document.getElementById('otp-img').src = './assets/verified.png';
                    otpCondition = true;
                } else if (res.data.type == "error") {
                    otpVerifyLoader.style.display = 'none';
                    document.getElementById('verified-container').style.display = 'flex'
                    document.getElementById('otp-text').innerHTML = "Wrong OTP";
                    document.getElementById('otp-img').src = './assets/wrong.png';
                }
            })
        } catch (e) {
            console.log(e);
        }
    } else {
        otpVerifyLoader.style.display = 'none';
    }
})




function changeImage(a) {
    console.log(a);
    for (let ele of elements) {
        if (ele.value == a) {
            ele.style.color = "#f7b538";
        } else {
            ele.style.color = "black"
        }
    };
    switch (a) {
        case 1:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim.gif";
            break;
        case 2:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5.gif";
            break;
        case 3:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-1.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-1.gif";
            break;
        case 4:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-2.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-2.gif";
            break;
        case 5:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-4-1.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-4-1.gif";
            break;
        case 6:
            gifImg.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5-1.gif";
            gifSm.src = "https://www.cynohub.com/wp-content/uploads/2023/01/imgpsh_fullsize_anim-5-1.gif";
            break;
        case 7:
            googleImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/5rev-2-1.png";
            break;
        case 8:
            googleImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/8rev-1-1.png";
            break;
        case 9:
            googleImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/7-rev-1-1.png";
            break;
        case 10:
            googleImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/6rev-4.png";
            break;
        case 11:
            industryImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/1-2.png";
            industryImgSm.src = "https://www.cynohub.com/wp-content/uploads/2022/12/1-2.png";
            break;
        case 12:
            industryImg.src = "https://www.cynohub.com/wp-content/uploads/2022/11/1234.jpg";
            industryImgSm.src = "https://www.cynohub.com/wp-content/uploads/2022/11/1234.jpg";
            break;
        case 13:
            industryImg.src = "https://www.cynohub.com/wp-content/uploads/2022/11/859.jpg";
            industryImgSm.src = "https://www.cynohub.com/wp-content/uploads/2022/11/859.jpg";
            break;
        case 14:
            industryImg.src = "https://www.cynohub.com/wp-content/uploads/2022/12/4.png";
            industryImgSm.src = "https://www.cynohub.com/wp-content/uploads/2022/12/4.png";
            break;
    }
}



let name = document.querySelector('#full-name');
let email = document.querySelector('#email');
let num = document.querySelector('#whatsapp');
let select = document.querySelector('#select').value;
let invalid = document.querySelector("#errorMsg");
let loader = document.querySelector(".loader");
let submitBtn = document.querySelector('#submit');


function handleChange() {
    invalid.style.display = "none"
}


function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}

//otp checks



document.querySelector('#submit').addEventListener('click', (event) => {
    event.preventDefault();
    if (name.value.length > 0) {
        invalid.style.display = "none"
        if (ValidateEmail(email.value)) {

            if (num.value.length === 10) {

                num.style.border = "1px solid #ccc"
                if (otpCondition) {
                    submitBtn.style.display = "none"
                    loader.style.display = "flex"
                    console.log(otpCondition);
                    let studentData = {
                        name: name.value,
                        email: email.value,
                        whatsapp: num.value,
                        occupation: select
                    }

                    let query = '?name=WEB2-' + studentData.name + '&phone=' + studentData.whatsapp + '&email=' + studentData.email + '&whatsapp=' + studentData.whatsapp + '&occupation=' + studentData.occupation

                    try {
                        axios.get('https://us-central1-cynohub-v3.cloudfunctions.net/full_stack_web_page_to_mattermost' + query).then(response => {
                            console.log(response.data);
                            loader.style.display = "none"
                            name.value = ""
                            email.value = ""
                            num.value = ""

                            submitBtn.style.display = "block"
                            window.location.replace('https://fullstack.cynohub.com/thank-you/');

                        })
                    } catch (error) {
                        console.log(error);
                        invalid.style.display = "block"
                    }

                    num.style.border = "1px solid #ccc"
                } else {
                    invalid.style.display = "block"
                }
            } else {
                invalid.style.display = "block"
                num.style.border = "1px solid red"
            }
            email.style.border = "1px solid #ccc"
        } else {
            invalid.style.display = "block"
            email.style.border = "1px solid red"
        }
        name.style.border = "1px solid #ccc"
    } else {
        invalid.style.display = "block"
        name.style.border = "1px solid red"
    }

    return false;
});