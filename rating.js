const rates = document.querySelectorAll(".rate");
const button = document.querySelector(".submit");
const backdrop = document.querySelector(".backdrop");
const result = document.querySelector(".result");
const body = document.querySelector(".body");


rates.forEach((rate,index) => {
    rate.addEventListener('click', (e) => {
        rates.forEach((r,i) => {
            if(i !== index){
                r.classList.remove("rates")
            }
        })

        if (rate.classList.contains("rates")) {
            rate.classList.remove("rates")
        }else{
            rate.classList.add("rates")

        }
        result.textContent = rate.textContent
    })
})


button.addEventListener('click', (e) => {
    body.classList.add("hidden");
    backdrop.classList.add("see");

})






















// const main = document.querySelector(".big-body");
// const body1 = document.querySelector(".body2");
// const body2 = document.querySelector(".backdrop");
// const rates = document.querySelector(".rate-sect");
// const button = document.querySelector(".submit");
// const actions = document.querySelectorAll(".rate");
// const container1 = document.querySelector(".container1");
// const closed = document.querySelector(".close")
// const closed2 = document.querySelector(".close2")

// actions.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         main.classList.add("big-body-see")
//         body1.classList.add("body2-see")
//     })
//     closed.addEventListener('click', () => {
//         body1.classList.remove("body2-see")
//         main.classList.remove("big-body-see")
//     })
    
//     closed2.addEventListener('click', () => {
//         body2.classList.remove("backdrop-see")
//         main.classList.remove("big-body-see")
//     })

// })

// button.addEventListener('click', () => {
//     body2.classList.add("backdrop-see")
//     body1.classList.remove("body2-see")
// })