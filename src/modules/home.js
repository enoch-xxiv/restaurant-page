// initial page loading

export default function loadHome() {
    const content = document.querySelector(".content");
    content.textContent = ``

    let para = document.createElement("p")
    para.textContent = `Welcome to our restaurant.`
    content.appendChild(para);
    
    return content;
}