let btnReward = document.querySelectorAll('.reward');
let content = document.querySelector(".content");
let overlay = document.createElement('div')
let bookmark = document.querySelector('.booked')
let imgBook = document.querySelector('.btnBook a img');
let BookingColor = document.querySelector('.booked span');


let popup = `
<div class="popUp">
<img class="close" src="images/icon-close-modal.svg">
<h2 class = "heading">Back this project</h2>
<p class ="description"> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
<div class= "box-popup">
<div class="check">
    <div>
        <input type="radio" name="sms" id="no-reward" class="pladge">
        <label for="no-reward">Pledge with no reward</label>
    </div>
</div>
<p class ="description">Choose to support us without a reward if you simply believe in our project. As a backer, 
you will be signed up to receive product updates via email.</p>
</div>
<div class= "box-popup">
<div class="check">
    <div>
        <input type="radio" name="sms" id="bamboo" class="pladge">
        <label for="bamboo">Bamboo Stand</label>
        <span class="pledge-price">Pledge $25 or more</span>
    </div>
<div class ="count-pladge">
<p>101 <span>left</span></p>
</div>
</div>
<p class ="description"> You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
    you’ll be added to a special Backer member list.</p>
</div>
<div class= "box-popup">
<div class="check">
    <div>
        <input type="radio" name="sms" id="black-edition" class="pladge">
        <label for="black-edition">Black Edition Stand</label>
        <span class="pledge-price">Pledge $75 or more</span>
    </div>
<div class ="count-pladge">
<p>64 <span>left</span></p>
</div>
</div>
<p class ="description">You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
    member list. Shipping is included.</p>
</div>
<div class= "box-popup">
<div class="check">
    <div>
        <input type="radio" name="sms" id="Mahogany" class="pladge">
        <label for="Mahogany">Mahogany Special Edition</label>
        <span class="pledge-price">Pledge $200 or more</span>
    </div>
<div class ="count-pladge">
<p>0 <span>left</span></p>
</div>
</div>
<p class ="description">You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
to our Backer member list. Shipping is included.</p>
</div>
</div>
`;


let submitPledge = `
<div class="submitBox">
<img src="images/icon-check.svg" alt="">
<h2>Thanks for your support!</h2>
<p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
    an email once our campaign is completed.</p>
    <a class = "got" href="#">Got it!</a>
</div>
`


let bookClick = 'unbook'

btnReward.forEach((btn) => {
    btn.addEventListener('click', function () {
        //Add class to element
        overlay.className = 'overlay-popup';
        // add elemnts in the popUp
        document.body.appendChild(overlay)
        overlay.innerHTML = popup
        // close popup
        let close = document.querySelector('.close');
        close.onclick = function () {
            overlay.remove()
        }

        // check if chosie
        let radio = document.querySelectorAll('input[type="radio"]')
        radio.forEach((radio) => {
            radio.addEventListener('click', function (e) {
                let lastElment = e.target.parentElement.parentElement.parentElement;
                if (e.target.id === 'black-edition' || e.target.id === 'bamboo') {
                if (lastElment.children.length < 3) {
                lastElment.style.border = '3px solid hsl(176, 50%, 47%)';
                // create elements
                let hr = document.createElement('hr');
                let perant = document.createElement('div');
                let span = document.createElement('span');
                let inputPearnt = document.createElement('div');
                let inputNumber = document.createElement('input');
                let button = document.createElement('a');
                // set some atrrabuite
                perant.className = 'enterPladge';
                span.innerHTML = 'Enter your pledge';
                inputPearnt.className = 'input';
                inputNumber.maxLength = '2';
                inputNumber.type = 'number';
                inputNumber.className = 'number'
                button.href = '#'
                button.innerHTML = 'Continue';
                button.className = 'submit';
                // add the elements to docement
                inputPearnt.append(inputNumber);
                inputPearnt.append(button)
                perant.append(span)
                perant.append(inputPearnt)
                lastElment.append(perant)
                if (e.target.id === 'black-edition') {
                    inputNumber.value = '75';
                } else {
                    inputNumber.value = '25';
                    }
                    }

                    let submit = document.querySelector('.submit');

                    submit.addEventListener('click', function () {
                        overlay.innerHTML = submitPledge
                        let got = document.querySelector('.got');
                        got.addEventListener('click', function () {
                            window.location.reload()
                        })
                    })

                }

                else {
                lastElment.style.border = '1px solid rgba(128, 128, 128, 0.877)';
                }

            })
        })
    })
})

bookmark.onclick = function () {
    if (bookClick === 'unbook') {
        imgBook.src = 'images/icon-bookmark2.svg'
        BookingColor.style.color = ' hsl(176, 50%, 47%)'
        BookingColor.innerHTML = 'Bookmarked'
        bookClick = 'book';
    } else {
        imgBook.src = 'images/icon-bookmark.svg'
        BookingColor.style.color = 'hsl(0, 0%, 48%)'
        BookingColor.innerHTML = 'Bookmark'
        bookClick = 'unbook'
    }
}



// Drop menue

let header = document.querySelector('header');
let ul = document.querySelector('header ul')
let icon = document.createElement('img');
icon.className = 'icon';
let background = document.querySelector('.photo img')
console.log(background)


window.onresize = function () {
    if (window.innerWidth < '767') {
        background.src = 'images/image-hero-mobile.jpg'
        ul.style.display = 'none'
        icon.src = 'images/icon-hamburger.svg'
        header.append(icon)
        overlay.remove()
    }
    else {
        background.src = 'images/image-hero-desktop.jpg'
        icon.src = 'images/icon-hamburger.svg'

        ul.style.display = 'flex'
        icon.remove()
    }
}




let mood = 'open';
icon.onclick = function () {
    if (mood === "open") {
        icon.src = 'images/icon-close-menu.svg'
        overlay.className = 'overlay-popup';
        // add elemnts in the popUp
        document.body.appendChild(overlay)
        ul.style.display = 'block'
        mood = 'close';
    } else {
        icon.src = 'images/icon-hamburger.svg'
        mood = 'open';
        overlay.remove()
        ul.style.display = 'none'
    }
}

let progress = document.querySelector('progress');
let baseValue = 0;


window.onload = function () {
    if (window.innerWidth < '767') {
        background.src = 'images/image-hero-mobile.jpg'
        ul.style.display = 'none'
        icon.src = 'images/icon-hamburger.svg'
        header.append(icon)
    }
    else {
        background.src = 'images/image-hero-desktop.jpg'
        ul.style.display = 'flex'
        icon.remove()
    }
    let id = setInterval(() => {
        progress.value += 10;
    if (progress.value === 80) {
        clearInterval(id)
    }
    }, 100);
}


