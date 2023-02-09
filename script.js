document.getElementById('contact').onclick = function() {
    let num1 = "1";
    let num2 = "4";
    let contact 

    let sa = "let num1 = " + num1 + ";<br> let num2 = " + num2 + ";<br> let contact = num1 + num2 "
    document.getElementById('orstat').innerHTML = sa;
    document.getElementById('oustat').innerHTML = "<p class='text-center pt-1'>" + contact + "</p>"

}



//////////
document.getElementById('askName').onclick = function() {

    let a = prompt('Enter your First Name');
    let b = prompt('Enter your Last Name');
    let c = a + ' ' + b;

    let se = "let a = " + a + ";<br> let b = " + b + ";<br> let c = a+' '+b"
    document.getElementById('orstat').innerHTML = se;
    document.getElementById('oustat').innerHTML = "<p class='text-center pt-1'>" + c + "</p>"

}



////////
document.getElementById('comperison').onclick = function() {

    let x = prompt('Enter your First Value')
    let y = prompt('Enter your Second Value')
    if (x == y) {
        let p = "let x = " + x + "<br> let y =" + y + ";<br>let z= x==y"
        document.getElementById('orstat').innerHTML = p;
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1'>" + "Condition is True" + "</p>"
    } else if (x != y) {
        let p = "let x = " + x + ";<br> let y =" + y;
        document.getElementById('orstat').innerHTML = p;
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1'>" + "Condition is False" + "</p>"
    } else {
        document.getElementById('orstat').innerHTML = "<p class='text-center pt-1'>" + "Please enter a valid number" + "</p>";
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1'>" + "Please enter a valid number" + "</p>"
    }

}



///////
document.getElementById('ifelse').onclick = function() {

    let news = prompt('Please Enter your Result Numbers')
    let marks = 99;
    if (news >= 99) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You Got A+<br>Brilient" + "</p>"
    } else if (news >= 80) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You Got A<br>Execelent" + "</p>"
    } else if (news >= 70) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You Got B <br>Good" + "</p>"
    } else if (news >= 60) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You Got C <br>Satisfactory" + "</p>"
    } else if (news >= 50) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You Got D <br>Need Hard working" + "</p>"
    } else if (news < 40) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "You are FAil <br> Try Again" + "</p>"
    }
}





//////
document.getElementById('testing').onclick = function() {

    let age = prompt('enter your age')
    let wieght = prompt('enter your weight')

    if (age > 40 && wieght > 85) {

        let s = "Your age = " + age + ";<br> Your weight = " + wieght;
        document.getElementById('orstat').innerHTML = s;
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'you are a fat guy' + "</p>"
    } else if (age >= 40 && wieght >= 60) {
        let s = "Your age = " + age + ";<br> Your weight = " + wieght;
        document.getElementById('orstat').innerHTML = s;
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'you are a smart guy' + "</p>"
    } else if (age <= 18 || wieght < 30) {
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'you are child' + "</p>"
    } else(document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'enter valid value' + "</p>")

}



///////
document.getElementById('ifState').onclick = function() {

    let age = prompt('Please enter you age')

    if (age >= 12) {

        let wieght = prompt('enter you wight')
        if (wieght <= 70) {
            let s = "Your age = " + age + ";<br> Your weight = " + wieght;
            document.getElementById('orstat').innerHTML = s;
            document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'you are a smart guy' + "</p>"

        } else {
            document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + 'you are a fat guy' + "</p>"

        }

    } else(document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + ' Your a Baby Boy' + "</p>")
}



////////
document.getElementById('login').onclick = function() {

    let q = prompt('Enter your Name')
    let v = prompt('Enter your Name')

    let firstName = "Ali"
    let pass = "0987"

    if (q === firstName && v === pass) {
        document.getElementById('orstat').innerHTML = ''
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "<code>YOu Successfully Login</b>" + "</code>"
    } else {
        document.getElementById('orstat').innerHTML = "Please Try userName = <b>'Hassan'</b> and password = <b>0987</b>"
        document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "<code>Carefully Entered your data</b>" + "</code>"
    }


}

//////
document.getElementById('chk').onclick = function() {
    let a = 'You checked this button'
    document.getElementById('orstat').innerHTML = a
    document.getElementById('oustat').innerHTML = "<p class='text-center pt-1 fw-1'>" + "<code>You checked this button</b>" + "</code>"

}
















document.getElementById('claee').onclick = function() {
    document.getElementById('orstat').innerHTML = "";

}

document.getElementById('clae').onclick = function() {

    document.getElementById('oustat').innerHTML = "";
}