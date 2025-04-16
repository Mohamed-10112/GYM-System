// image slider
var img = document.getElementById("home424");
function leftBtn() {
    img.src = 'img/pexels-photo-1229356.jpeg';
}
function rightBtn() {
    img.src = 'img/1233907.jpg';
}

document.addEventListener('DOMContentLoaded', () => {
    const userRole = localStorage.getItem('userRole'); 
    if (userRole) {
        if (userRole === 'user') {
            document.getElementById("user-link").style.display="block";
        } else if (userRole === 'admin') {
            document.getElementById("modify").style.display="block";
            document.getElementById("contactSS").style.display= "block";
        }
        document.getElementById('logout-link').style.display ="block";
    }
});

function logout() {
    localStorage.removeItem('userRole');
    window.location.href = 'index.html'; 
}

function modifyPrice() {

    var new1= document.getElementById("mod1").value;
    var new2= document.getElementById("mod2").value;
    var new3= document.getElementById("mod3").value;

    localStorage.setItem("pr11",new1);
    localStorage.setItem("pr22",new2);
    localStorage.setItem("pr33",new3);

    var newContent1 ='$' + localStorage.getItem("pr11"); 
    var newContent2 ='$' + localStorage.getItem("pr22"); 
    var newContent3 ='$' + localStorage.getItem("pr33"); 

    document.getElementById("pr1").textContent = newContent1;
    document.getElementById("pr2").textContent = newContent2;
    document.getElementById("pr3").textContent = newContent3;

    localStorage.setItem("spanContent1", newContent1);
    localStorage.setItem("spanContent2", newContent2);
    localStorage.setItem("spanContent3", newContent3);

}

function modifyWorkHrs() {
    var newCon1 = document.getElementById("end").value;
    var newCon2 = document.getElementById("days").value;

    localStorage.setItem("hrs11" , newCon1);
    localStorage.setItem("hrs22" , newCon2);

    var newcont1 = localStorage.getItem("hrs11");
    var newcont2 = localStorage.getItem("hrs22");

    document.getElementById("hrs1").textContent = newcont1;
    document.getElementById("hrs2").textContent = newcont2;

    localStorage.setItem("weekendsContent" , newcont1);
    localStorage.setItem("weekdaysContent" , newcont2);

}
// bundle info---------------------------------------------------------
var x = 0;
function bundleInfo1() {
    x = 1;
    localStorage.setItem("flag" , x);
    var price1 = localStorage.getItem("pr11");
    localStorage.setItem("sysName1" , "Basic");
    localStorage.setItem("sysPrice1" , price1);
    
}
function bundleInfo2() {
    x = 2;
    localStorage.setItem("flag" , x);
    var price2 = localStorage.getItem("pr22");
    localStorage.setItem("sysName2" , "Pro");
    localStorage.setItem("sysPrice2" , price2);

}
function bundleInfo3() {
    x = 3;
    localStorage.setItem("flag" , x);
    var price3 = localStorage.getItem("pr33");
    localStorage.setItem("sysName3" , "Premium");
    localStorage.setItem("sysPrice3" , price3);

}

window.onload = function() {
    // for pricing -----------------------------------------------------
    var savedContent1 = localStorage.getItem("spanContent1");
    var savedContent2 = localStorage.getItem("spanContent2");
    var savedContent3 = localStorage.getItem("spanContent3");
    if (savedContent1) {
        document.getElementById("pr1").textContent = savedContent1;
    }
    if (savedContent2) {
        document.getElementById("pr2").textContent = savedContent2;
    }
    if (savedContent3) {
        document.getElementById("pr3").textContent = savedContent3;
    }
    // for contact -----------------------------------------------------
    var savedContact1 = localStorage.getItem("weekendsContent");
    var savedContact2 = localStorage.getItem("weekdaysContent");
    if (savedContact1) {
        document.getElementById("hrs1").textContent = savedContact1;
    }
    if (savedContact2) {
        document.getElementById("hrs2").textContent = savedContact2;
    }

};