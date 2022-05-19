function changecolour(){
    const nume_item = "lightmode";
    if(window.localStorage.getItem(nume_item) != null){
        if(window.localStorage.getItem(nume_item) == 0){
            window.localStorage.removeItem(nume_item);
            document.documentElement.style.setProperty('--white','#222525')
            document.documentElement.style.setProperty('--black','#f8f5f2')
            document.documentElement.style.setProperty('--purple','#078080')
            document.documentElement.style.setProperty('--grey','#f45d48')
            document.documentElement.style.setProperty('--black2','#f8f5a9')
            window.localStorage.setItem(nume_item, 1);
        }
        else{
            document.documentElement.style.setProperty('--white','#fffffe')
            document.documentElement.style.setProperty('--black','#16161a')
            document.documentElement.style.setProperty('--purple','#7f5af0')
            document.documentElement.style.setProperty('--grey','#94a1b2')
            document.documentElement.style.setProperty('--black2','#010101')
            window.localStorage.setItem(nume_item, 1);
        }
    }
    else{
        document.documentElement.style.setProperty('--white','#222525')
        document.documentElement.style.setProperty('--black','#f8f5f2')
        document.documentElement.style.setProperty('--purple','#078080')
        document.documentElement.style.setProperty('--grey','#f45d48')
        document.documentElement.style.setProperty('--black2','#f8f5a9')
        window.localStorage.setItem(nume_item, 1);
    }
}