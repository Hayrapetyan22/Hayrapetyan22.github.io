let container = document.querySelector('.container');
let slider = document.querySelector('.slider');
let navigation = document.querySelector('.navigation');
let child = document.querySelector('.btn');
let child1 = document.querySelector('.btn1');
let child2 = document.querySelector('.btn2');
let child3 = document.querySelector('.btn3');
let link = document.querySelectorAll('a');
let knopka = document.querySelector('.category-btn');
let text = knopka.querySelector('h1');
let img = knopka.querySelector('img');
let menu = document.querySelector('.magazine-main');
let childs = document.querySelectorAll('.child');
let colors = ['#ccc', 'gray', '#0C5EF3', 'gold'];
let a = 0;

// childs.forEach((col, ind) => {
//     col.style.background = colors[ind];
//     col.onclick = () => {
//         col.style.background = colors[ind];
//     }
// })

setInterval(() => {
    a += 100;
    slider.style.left = -a + '%';
    if (a > 300) {
        a += 100;
        a = 0;
        slider.style.left = -a + '%';
    }
    child1.onclick = () => {
        if (a > 100) {
            a += 100;
            a = 100;
            slider.style.left = -a + '%';
        }
        else if (a < 100) {
            a += 100;
            a = 100;
            slider.style.left = -a + '%';
        }
    }
    child.onclick = () => {
        if (a > 0) {
            a += 100;
            a = 0;
            slider.style.left = -a + '%';
        }
        else if (a < 0) {
            a += 100;
            a = 0;
            slider.style.left = -a + '%';
        }
    }
    child2.onclick = () => {
        if (a > 200) {
            a += 100;
            a = 200;
            slider.style.left = -a + '%';
        }
        else if (a < 200) {
            a += 200;
            a = 200;
            slider.style.left = -a + '%';
        }
    }
    child3.onclick = () => {
        if (a > 300) {
            a += 100;
            a = 300;
            slider.style.left = -a + '%';
        }
        else if (a < 300) {
            a += 300;
            a = 300;
            slider.style.left = -a + '%';
        }
    }
}, 3000);

knopka.onclick = () => {
    menu.style.display = 'none';

}
knopka.ondblclick = () => {
    menu.style.display = 'block';
    menu.style.gap = '10px';
}

gsap.to("#nav", {
    backgroundColor: '#000',
    height: '120px',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})


gsap.to(".slider", {
    backgroundColor: 'gray',
    height: '120px',
    delay: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers : true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1
    }
})

gsap.to("#about-us", {
    backgroundColor: 'gray',
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers:true,
        start: "top -20%",
        end: "-58%",
        scrub: 3
    }
})

gsap.to(".card", {
    backgroundColor: '#ccc',
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers : true,
        start: 'top -100vh',
        end: 'top 100vh',
        scrub: 4
    }
})
gsap.to(".norutyun", {
    backgroundColor: '#ccc',
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".norutyun",
        scroller: "body",
        // markers : true,
        start: 'top -100vh',
        end: 'top -100vh',
        scrub: 5
    }
})

