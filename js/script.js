var my1 = document.getElementById("my");
my1.addEventListener("focus", function (event) {
    this.value = '';
})
my1.addEventListener("blur", function (event) {
    this.value = 'Search';
})


// --------first slider-------
var leftbtn = document.getElementById("left");
var rightbtn = document.getElementById("right");
var img1 = document.querySelector(".imgs img");
var count = 0;
var my_imgs = ["images/21.jpg", "images/22.jpg", "images/23.jpg"]
img1.setAttribute("src", my_imgs[0]);

rightbtn.addEventListener("click", function () {
    count++;
    if (count > my_imgs.length - 1) {
        count = 0;
    }
    img1.setAttribute("src", my_imgs[count]);
})
leftbtn.addEventListener("click", function () {
    count--;
    if (count < 0) {
        count = my_imgs.length - 1;
    }
    img1.setAttribute("src", my_imgs[count]);
})

// -----buttons & mouseevents------

var test0 = document.getElementById("test0");
test0.addEventListener("click", function () {
    img1.setAttribute("src", my_imgs[0]);
    test0.style.border = "5px solid white";
    test2.style.border = "none";
    test1.style.border = "none";


})
var test1 = document.getElementById("test1");
test1.addEventListener("click", function () {
    img1.setAttribute("src", my_imgs[1]);
    test1.style.border = "5px solid white";
    test0.style.border = "none";
    test2.style.border = "none";
})
var test2 = document.getElementById("test2");
test2.addEventListener("click", function () {
    img1.setAttribute("src", my_imgs[2]);
    test2.style.border = "5px solid white";
    test0.style.border = "none";
    test1.style.border = "none";

})

// onmouseout and onmouseover 

var k1 = document.getElementById("want1");
k1.addEventListener("mouseover", mouseover);
k1.addEventListener("mouseout", mouseout);
function mouseover() {
    this.innerText = "YES I WANT IT";
    this.style.padding = '32px 45px'

}
function mouseout() {
    this.innerText = "BYU THIS THEME";
    this.style.padding = '32px 35px';
}
var k2 = document.getElementById("want2");
k2.addEventListener("mouseover", function (event) {
    this.style.color = 'black';
    this.style.borderColor = 'black';
})
k2.addEventListener("mouseout", function (event) {
    this.style.color = '#999';
    this.style.borderColor = '#999';
})
// --------------slider-girls-----------------
var left1 = document.getElementById("left1");
left1.addEventListener("click", previous);
var right1 = document.getElementById("right1");
right1.addEventListener("click", next)
var count1 = 0;

var slide_div_length = document.getElementsByClassName("slide")[0].clientWidth;
var slides_length = document.querySelectorAll(".slides .slide").length;
var slides = document.querySelector(".slides");
slides.style.position = "relative";
var a = 0;
slides.style.right = a + "px";
document.getElementsByClassName("slides")[0].style.transition = 'all 0.5s';

function next() {
    count1++;
    console.log(a);
    a = a + slide_div_length;
    slides.style.right = a + "px";
    console.log(count1);
    if (count1 > slides_length - 4) {
        a = 0;
        count1 = 0;
    }
    slides.style.right = a + "px";
}

function previous() {
    count1--;
    console.log(a);
    a = a - slide_div_length;
    slides.style.right = a + "px";
    console.log(count1);
    if (count1 < 0) {
        a = slide_div_length * 3;
        count1 = 3;
        console.log(a);
    }
    slides.style.right = a + "px";
}
// -----our team slider-----

var left2 = document.getElementById("left2");
var right2 = document.getElementById("right2");
right2.addEventListener("click", next2);
left2.addEventListener("click", previous2);
var count2 = 0;
var slide_div_length2 = document.getElementsByClassName("slide1")[0].clientWidth;
var slides_length2 = document.querySelectorAll(".myteam .slide1").length;


var myteam = document.querySelector(".myteam");
myteam.style.position = "relative";
var a1 = 0;
myteam.style.right = a1 + "px";
document.getElementsByClassName("myteam")[0].style.transition = 'all 0.8s';


function next2() {
    count2++;
    a1 = a1 + slide_div_length2 + 20;
    myteam.style.right = a1 + "px";
    if (count2 > slides_length2 - 3) {
        a1 = 0;
        count2 = 0;
    }
    myteam.style.right = a1 + "px";
}

function previous2() {
    count2--;
    console.log(a);
    a1 = a1 - (slide_div_length2 + 20);
    myteam.style.right = a + "px";
    console.log(count2);
    if (count2 < 0) {
        a1 = (slide_div_length2 + 20) * 5;
        count2 = 5;
        console.log(a1);
    }
    myteam.style.right = a1 + "px";
}


// --------slider clients say about us ------

var list_div_length = document.getElementsByClassName("list")[0].clientWidth;
var newsLenta = document.querySelector(".newsLenta");
newsLenta.style.position = "relative";
var m = 0;
newsLenta.style.right = m + "px";
document.getElementById("points").addEventListener("click", function (event) {
    var target = event.target.getAttribute('index');
    if (target !== null) {
        m = target * list_div_length;
        newsLenta.style.right = m + "px";
        console.log(m);
        for (var i = 0; i < newsLenta.childElementCount; i++) {
            this.children[i].classList.remove("active");
        }
        this.children[target].classList.add("active");
    }

});
// ----footer mouseevents-----
var input2 = document.getElementById("input2");
var input1 = document.getElementById("input1");
input1.addEventListener("focus", function (event) {
    this.style.opacity = '1';
    this.style.transition="all 0.5s"
    if (this.value == "Name") {
        this.value = "";
    }
});
input1.addEventListener("blur", function (event) {
    this.style.opacity = '0.1';
   
    if (this.value == "") {
        this.value = "Name";
    }
});
input2.addEventListener("focus", function (event) {
    this.style.opacity = '1';
     this.style.transition="all 0.5s"
    if (this.value == "Message") {
        this.value = "";
    }
});
input2.addEventListener("blur", function (event) {
    this.style.opacity = '0.1';
    if (this.value == "") {
        this.value = "Message";
    }
});

// ----Clean Code-----!!!

titles =["Clean Code","Technical Support","Responsive","Documentation","Quality","Support"];
var tabs=document.querySelectorAll(".clean .tab");
var title=document.querySelector(".clean .title");
toptitle=-90;
lastactivetab=1;

for(var i=0;i < tabs.length;i++) {
    tabs[i].addEventListener("click",clean);
}
function clean() {
    tab=event.target;
	console.log(tab);
    val=tab.getAttribute('index');
    console.log(val)
    if (val != lastactivetab) {
        titlep=document.querySelector(".clean .title p");
        titlep.innerHTML= titles[val-1]

         k = setInterval(myslide,2);

        tab.className +=" active";
        console.log(tab.classList);
        span =document.querySelector(" .tab span");
        span.innerHTML=titles[val-1]
       console.log(span);
        s=document.querySelector("div[index='"+lastactivetab+"']");
        s.getElementsByTagName("span")[0].innerHTML="";
        s.classList.remove("active");
        console.log(s);
        lastactivetab=val;

    }
}

function myslide() {
    console.log("myslide")
    title.style.top=toptitle + "px";
    toptitle += 1;
    if (toptitle == 1) {
        clearInterval(k);
        toptitle = -100;
    }
}



