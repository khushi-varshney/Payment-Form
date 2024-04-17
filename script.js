let names = document.getElementById("name");
let email = document.getElementById("email");
let pincode = document.getElementById("pincode");
let male = document.getElementById("male");
let female = document.getElementById("female");
let address = document.getElementById("address");
let validate = document.getElementById("validate");
let amount = document.getElementById("amount");
let password = document.getElementById("email-password");
let date = document.getElementById("date");
let payNow = document.getElementById("payNow");
let body = document.querySelector("body");
let div = document.querySelector(".container");
let music = new Audio("evil-laugh-multi-34044.mp3");
let mysterious = new Audio("joke.mp3");




validate.addEventListener("click", () => {
    if (email.value.endsWith("@gmail.com")) {
        if (password.value != "") {
            validate.innerText = "Valid E-mail";
        } else {
            validate.innerText = "First Enter The Password";
        }
    }
})


payNow.addEventListener("click", () => {
    body.removeChild(div);
    body.innerHTML = `
       <div id="center">
       <h3>SUCCESSFUL <i class="fa-solid fa-circle-check"></i> Your Payment is done</h3>
         <div id="after">
                <p>Name : ${names.value}</p>
                <p>E-mail : ${email.value}</p>
                <p>Pincode : ${pincode.value}</p>
                <p>Address : ${address.value}</p>
                <p>Expiration-Date : ${date.value}</p>
                <p>Amount : ${amount.value}</p>
                <button id="ok">OK</button>
         </div>
      </div>   
    `;
    simulation();
})

async function simulation() {
    let obj = ["Loading", "Your Password is being Fetched", "Account Hacked", "BYE-BYE"];
    for (i = 0; i < obj.length; i++) {
        await hacking(obj[i]);
    }
    await joke();
}

function hacking(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.innerHTML = `<h6 id="start"></h6><img src="devil-laugh.gif" class="evilEmoji">`
            body.classList.add("blank")
            let head = document.querySelector("#start");
            head.innerText = data;
            setInterval(() => {
                let last = document.querySelector("#start");
                if (last.innerText.endsWith("....")) {
                    last.innerText = last.innerText.slice(0, last.innerText.length - 4)
                } else {
                    last.innerText = last.innerText + ".";
                }
            }, 700);
            setTimeout(() => {
                music.play()
            }, 1000)
            resolve(200);
        }, (Math.floor(Math.random() * 7)+2) * 1000);
    })
}

function joke() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            body.innerHTML = `<h1 class="jokeCheck">THIS IS &nbsp;</h1>`
            let span=document.createElement("span");
            span.classList.add("text")
            body.appendChild(span)
            body.classList.add("blan")
            mysterious.play();
            const typed = new Typed(".text", {
                strings:[' JUST A JOKE', ' AND', ' AN EXAMPLE OF HACKING SIMULATION.'],
                typeSpeed:50,
                backSpeed:50,
                backDelay:600,
                loop:true
            });
            setTimeout(()=>{
                function relod(){
                    window.location.reload();
                }
                relod();
            }, 6500);
            resolve(200);
        },2000)
    })
}










