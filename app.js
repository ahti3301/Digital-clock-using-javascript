const clock = document.querySelector(".clock")
const begin = document.getElementById("btn-1")
const end = document.getElementById("btn-2")










const tick = ()=>{
    const now = new Date();
    const time = now.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})
    const date = now.toDateString()
    //console.log(date);
    //console.log(time);
    clock.innerHTML = `<span>${time}</span> <h3>${date}</h3> `
   
}
//
let start;
begin.addEventListener("click",()=>{
    start = setInterval(tick,1000)
})

end.addEventListener("click",()=>{
    clearInterval(start)
})

