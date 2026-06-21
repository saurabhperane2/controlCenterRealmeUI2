let middle = document.querySelector(".middle");
let m1 = document.querySelector(".m1");
let notification = document.querySelector(".notifications");
middle.addEventListener("click", () => {
    middle.style.height = "40vmax";
    m1.style.height = "30vmax";
    m1.style.gap = "5vmax";
    notification.style.height = "37vh";
})
middle.addEventListener("dblclick", () => {
    middle.style.height = "15vmax";
    m1.style.height = "7vmax";
    m1.style.gap = "1vmax";
    notification.style.height = "62vh";
})