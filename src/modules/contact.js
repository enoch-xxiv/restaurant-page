export default function loadContact() {
    const content = document.querySelector(".content");
    content.textContent = ``

    let para = document.createElement("p")
    para.textContent = `Contact us at:
                        Email: info@example.com
                        Phone: 123-456-7890`;
    content.appendChild(para);
    
    return content;
}