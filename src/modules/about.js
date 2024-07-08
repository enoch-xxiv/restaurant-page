export default function loadAbout() {
    const content = document.querySelector(".content");
    content.textContent = ``

    let para = document.createElement("p")
    para.textContent = `Welcome to our restaurant! We pride ourselves on serving delicious meals made with the freshest ingredients. Our menu offers a wide variety of options to satisfy every palate, from mouthwatering appetizers to delectable main courses and decadent desserts. Whether you're craving a juicy steak, a flavorful pasta dish, or a refreshing salad, we have something for everyone. Our talented chefs work tirelessly to create culinary masterpieces that will leave you wanting more. Join us for an unforgettable dining experience and let us take you on a culinary journey that will tantalize your taste buds. Bon appétit!`;
    content.appendChild(para);
    
    return content;
}