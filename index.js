setTimeout(() => {
    document.getElementById("opening").style.left = -200 + '%'
}, 6000);

setTimeout(() => {
    document.getElementById("set-up").innerHTML = "welcome"
    window.scrollTo(0, 0)
}, 5000);




window.addEventListener("scroll", () => {
    let content = document.querySelector(".div-with-img");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h // ? html.height
    if (contentPosition < screenPosition) {
        content.classList.add("div-with-img-ativ");


    } else {
        content.classList.remove("div-with-img-ativ")
    }
})




// ??    ! IMP for all scroll animation for !    ??????????????????????????????????????????????????????

w = window.innerWidth;
h = window.innerHeight;


if (h < 670) {
    h = 300;



}
if (h > 670) {
    h = 520
}

// ??    ! IMP for scroll animation for !    ??????????????????????????????????????????????????????? 




window.addEventListener("scroll", () => {
    let content = document.querySelector(".div_1");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h // ? html.height
    if (contentPosition < screenPosition) {
        content.classList.add("div_ativ1");



    } else {
        content.classList.remove("div_ativ1")
    }
})





window.addEventListener("scroll", () => {
    let content = document.querySelector(".div_3");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h // ? html.height
    if (contentPosition < screenPosition) {
        content.classList.add("div_ativ3");


    } else {
        content.classList.remove("div_ativ3")
    }
})




window.addEventListener("scroll", () => {


    let content = document.querySelector(".div_2");
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = h // ? html.height                                                                       
    if (contentPosition < screenPosition) {
        content.classList.add("div_ativ2");


    } else {
        content.classList.remove("div_ativ2")
    }
})




function ani() {
    document.getElementById("srcolling-id").style.display = " block"

    setTimeout(() => {

        window.scrollTo(0, 800)

    }, 1800);





    setTimeout(() => {

        window.scrollTo(0, 1300)

    }, 5800);
    setTimeout(() => {

        window.scrollBy(0, -1300)
        document.getElementById("srcolling-id").style.display = "none"

    }, 10800);


    setTimeout(() => {

        let obj = document.getElementById("but").innerHTML = "scroll"
        document.getElementById("but").style.display = "none"




    }, 1000);

    setTimeout(() => {

        document.getElementById("trip-text").innerHTML = "let's scroll.."



    }, 1300);

    setTimeout(() => {

        document.getElementById("trip-text").innerHTML = "jest an developer"



    }, 9000);



    // anim\
    var js = anime({
        targets: ".po",
        d: [
            { value: 'M1900,409.115c0,0-488.47,225.115-1119.613,0c-631.143-225.115-1157.258,0-1157.258,0V-101H1780V409.115z' }
        ],
        // points: ['1284.5,804 -1,804 -1,0.5 238.111,392.591 1280,0 ',],
        loop: true,
        direction: 'alternate',
        // easing: 'easeInOutSine',
        easing: 'easeInOutQuad',
        //   easing: 'easeInOutExpo',
        // easing: 'easeOutQuad',
        duration: 3000,
    })
}








setTimeout(() => {
    document.getElementById("div-of-go").style.display = "block"

}, 6000);


setTimeout(() => {
    document.getElementById("sms").style.right = 3 + '%'

}, 17000);



setTimeout(() => {
    document.getElementById("logo").style.opacity = 1;

}, 3000);


setTimeout(() => {
    document.getElementById("sms").style.display = "none";

}, 200000);

function X() {
    document.getElementById("sms").style.display = "none";
}


function send() {
    text = document.getElementById("sms-input").value;



    document.getElementById("text-ms-send").style.display = "block"

    content = document.getElementById("ms-send").innerHTML = text;

    setTimeout(() => {
        document.getElementById("text-ms-email").style.display = "block";

    }, 3000);

    setTimeout(() => {
        document.getElementById("text-ms-tnk").style.display = "block";

    }, 5000);





}


function ch() {


    document.getElementById("my-img").src = "/IMG_20210108_132654-02 gif.png"
    var content = document.getElementById("my-img");

    content.classList.add("my-img-a")

}

function cha() {
    document.getElementById("my-img").src = "/IMG_20210108_132654-02.jpeg"

    var content = document.getElementById("my-img");

    content.classList.remove("my-img-a")
}



function allTimeAtiveMode() {
    // const darkmode = document.getElementById("darkMode").checked


    let darkMode = localStorage.getItem("dark")



    if (darkMode == "true") {
        var content = document.getElementsByTagName('body')[0];
        var content2 = document.getElementById('my_box')
        var content4 = document.getElementById('nav')


        content.classList.add("body-a");
        content2.classList.add("my_box-a");
        content4.classList.add("nav-a");

        document.getElementById("darkMode").checked = true
    } else {
        var content = document.getElementsByTagName('body')[0];
        var content2 = document.getElementById('my_box')
        var content4 = document.getElementById('nav')


        content.classList.remove("body-a");
        content2.classList.remove("my_box-a");
        content4.classList.remove("nav-a");

        document.getElementById("darkMode").checked = false


    }
}




allTimeAtiveMode()



function darkMode() {


    const darkmode = document.getElementById("darkMode").checked


    if (darkmode == true) {
        // alert("heu")
        localStorage.setItem("dark", "true")
    } else {
        localStorage.setItem("dark", "false")
    }

    var content = document.getElementsByTagName('body')[0];
    var content2 = document.getElementById('my_box')
    var content4 = document.getElementById('nav')


    content.classList.toggle("body-a");
    content2.classList.toggle("my_box-a");
    content4.classList.toggle("nav-a");


}



const maxW = innerWidth;
if (maxW > 800) {
    document.getElementById("l_2").style.display = "none";
}


var js = anime({
    targets: ".my-svg",
    d: [
        { value: 'M1280,493h-33c0,0-110-150-128,0s-586.001-466-604,0s-316-134-382,6S5,493,7,993V5h1575V893z' }
    ],
    // points: ['1284.5,804 -1,804 -1,0.5 238.111,392.591 1280,0 ',],
    loop: true,
    direction: 'alternate',
    // easing: 'easeInOutSine',
    easing: 'easeInOutQuad',
    //   easing: 'easeInOutExpo',
    // easing: 'easeOutQuad',
    duration: 3000,
})



// function darkModeAtviO() {

//     // const darkmode = document.getElementById("darkMode").checked

//     const dek = localStorage.getItem("dark")

//     alert(dek)


// }


// darkModeAtviO()