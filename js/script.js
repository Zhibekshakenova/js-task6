document.body.style.background ="rgb(18, 25, 61)";

const wrapper = document.createElement("div");
wrapper.id = "wrapper";
document.body.append(wrapper);
wrapper.style.width = "375px";
wrapper.style.fontFamily = '"Roboto Condensed", sans-serif';
wrapper.style.height = "590px";
wrapper.style.backgroundColor = "rgb(25, 45, 75)";
wrapper.style.margin = "auto";
wrapper.style.borderRadius = "15px";
wrapper.style.marginTop = "100px";
wrapper.style.marginBottom = "100px";

// const wrapper2 = wrapper.cloneNode;
// wrapper2 = "wrapper2";
// document.body.appendChild(wrapper2);

//image

const image = document.createElement ("img");
wrapper.append(image);
image.setAttribute("src", "images/image-equilibrium.jpg");
image.style.width = "335px";
image.style.height = "300px";
image.style.borderRadius = "15px";
image.style.marginLeft = "20px";
image.style.marginTop = "20px";

 // title

const title = document.createElement ("a");
title.href = "#";
wrapper.append(title);
title.innerText = "Equilibrium #3429";
title.style.fontFamily = '"Roboto Condensed", sans-serif';
title.style.fontSize = "30px";
title.style.color = "#fff";
title.style.marginTop = "15px";
title.style.marginLeft = "20px";
title.style.fontWeight = "600";
title.style.display = "block";
title.style.textDecoration = "none";

 // subtitle

 const subtitle = document.createElement("p");
 wrapper.append(subtitle);
 subtitle.innerText = "Our Equilibrium collection promotes balance and calm";
 subtitle.style.color = "hsl(217, 31%, 37%)";
 subtitle.style.fontFamily = '"Roboto Condensed", sans-serif';
 subtitle.style.fontSize = "20px";

 //ul

 const rightPart = document.createElement("ul");
 wrapper.appendChild(rightPart);
 rightPart.className = "rightPart";
 rightPart.style.listStyle = "none";
 rightPart.style.display = "flex";
 rightPart.style.justifyContent = "space-between";

 //li
const rightItem = document.createElement("li")
rightPart.append(rightItem);
rightItem.innerText = "0.041ETH";
rightItem.style.fontSize = "16px";
rightItem.style.fontFamily = '"Roboto Condensed", sans-serif';
rightItem.style.color = "hsl(177, 100%, 37%)";
rightItem.style.fontWeight = "600";
rightItem.style.marginLeft = "5px";

const icon = document.createElement("img");
icon.setAttribute("src", "images/icon-ethereum.svg");
rightItem.appendChild(icon);
icon.style.top = "557px";
icon.style.left = "510px";
icon.style.position = "absolute";