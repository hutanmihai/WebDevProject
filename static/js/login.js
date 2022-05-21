let ButtonDark_Light = document.getElementById('changecolourbutton');
const nume_item = "mode";

setInterval(checkMode, 0);

function checkMode(){
    if (window.localStorage.getItem(nume_item) == 'dark' || window.localStorage.getItem(nume_item) == null) turndark();
    else{
        turnlight();
    }
    clearInterval();
}

function turnlight(){
    document.documentElement.style.setProperty('--white', '#222525')
    document.documentElement.style.setProperty('--black', '#f8f5f2')
    document.documentElement.style.setProperty('--purple', '#078080')
    document.documentElement.style.setProperty('--grey', '#f45d48')
    document.documentElement.style.setProperty('--black2', '#f8f5a9')
}

function turndark(){
    document.documentElement.style.setProperty('--white', '#fffffe')
    document.documentElement.style.setProperty('--black', '#16161a')
    document.documentElement.style.setProperty('--purple', '#7f5af0')
    document.documentElement.style.setProperty('--grey', '#94a1b2')
    document.documentElement.style.setProperty('--black2', '#010101')
}
ButtonDark_Light.addEventListener("click", function () {
    if (window.localStorage.getItem(nume_item) == 'dark' || window.localStorage.getItem(nume_item) == null) {
        window.localStorage.clear();
        window.localStorage.setItem(nume_item, 'light')
        turnlight();
    } else {
        window.localStorage.removeItem(nume_item);
        turndark();
        window.localStorage.setItem(nume_item, 'dark');
    }
})

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 39:
            if (window.localStorage.getItem(nume_item) == 'dark' || window.localStorage.getItem(nume_item) == null) {
                window.localStorage.clear();
                window.localStorage.setItem(nume_item, 'light')
                turnlight();
            }
            break
        case 37:
            if (window.localStorage.getItem(nume_item) == 'light') {
                window.localStorage.removeItem(nume_item);
                turndark();
                window.localStorage.setItem(nume_item, 'dark');
            }
            break
    }
})

let Interval = setInterval(showTips, 10000);

function showTips() {
    let newtip = document.createElement('h3');
    newtip.innerText = "Credentialele dumneavoastra sunt in siguranta!";
    newtip.style.display = 'flex';
    newtip.style.justifyContent = 'center';
    newtip.style.alignItems = 'center';
    newtip.style.color = 'green';
    newtip.style.textDecoration = 'underline';
    document.body.append(newtip);
    setTimeout(() => {
        newtip.remove();
    }, 5000)
}

function validateForm() {
    const re = /[A-Z].*/
    let parola = document.forms['LoginForm']['pass'].value;
    if (re.test(parola) == 0) {
        let newh = document.createElement('h2');
        newh.innerText = "Parola trebuie sa inceapa cu litera mare!";
        newh.style.display = 'flex';
        newh.style.justifyContent = 'center';
        newh.style.alignItems = 'center';
        newh.style.color = 'red';
        newh.style.fontWeight = 'bold';
        document.body.append(newh);
        setTimeout(() => {
            newh.remove();
        }, 5000)
        return false;
    } else return true;
}