fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);

    const city1 = data.places[0].name;
    const city2 = data.places[1].name;
    const city3 = data.places[2].name;
    const city4 = data.places[3].name;
    const city5 = data.places[4].name;
    const city6 = data.places[5].name;
    const city7 = data.places[6].name;
    const city8 = data.places[7].name;
    const city9 = data.places[8].name;

    document.querySelector(".city1").innerHTML = city1;
    document.querySelector(".city2").innerHTML = city2;
    document.querySelector(".city3").innerHTML = city3;
    document.querySelector(".city4").innerHTML = city4;
    document.querySelector(".city5").innerHTML = city5;
    document.querySelector(".city6").innerHTML = city6;
    document.querySelector(".city7").innerHTML = city7;
    document.querySelector(".city8").innerHTML = city8;
    document.querySelector(".city9").innerHTML = city9;

    const img1 = data.places[0].image;
    const img2 = data.places[1].image;
    const img3 = data.places[2].image;
    const img4 = data.places[3].image;
    const img5 = data.places[4].image;
    const img6 = data.places[5].image;
    const img7 = data.places[6].image;
    const img8 = data.places[7].image;
    const img9 = data.places[8].image;

    document.getElementById("img1").src = img1;
    document.getElementById("img2").src = img2;
    document.getElementById("img3").src = img3;
    document.getElementById("img4").src = img4;
    document.getElementById("img5").src = img5;
    document.getElementById("img6").src = img6;
    document.getElementById("img7").src = img7;
    document.getElementById("img8").src = img8;
    document.getElementById("img9").src = img9;

    const para1 = data.places[0].info;
    const para2 = data.places[1].info;
    const para3 = data.places[2].info;
    const para4 = data.places[3].info;
    const para5 = data.places[4].info;
    const para6 = data.places[5].info;
    const para7 = data.places[6].info;
    const para8 = data.places[7].info;
    const para9 = data.places[8].info;

    document.querySelector(".para1").innerHTML = para1;
    document.querySelector(".para2").innerHTML = para2;
    document.querySelector(".para3").innerHTML = para3;
    document.querySelector(".para4").innerHTML = para4;
    document.querySelector(".para5").innerHTML = para5;
    document.querySelector(".para6").innerHTML = para6;
    document.querySelector(".para7").innerHTML = para7;
    document.querySelector(".para8").innerHTML = para8;
    document.querySelector(".para9").innerHTML = para9;
  });
