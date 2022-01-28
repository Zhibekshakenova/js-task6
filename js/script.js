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
title.style.marginTop = "20px";
title.style.marginLeft = "20px";
title.style.fontWeight = "600";
title.style.display = "block";
title.style.textDecoration = "none";
