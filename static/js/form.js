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
    const re = /[A-Z].{7,}/;
    let parola = document.forms['LoginForm']['pass'].value;
    if (re.test(parola) == 0) {
        let newh = document.createElement('h2');
        newh.innerText = "Parola trebuie sa inceapa cu litera mare! Si sa aiba cel putin 8 caractere!";
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