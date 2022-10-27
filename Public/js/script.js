let oyuncu1 = document.getElementById("oyuncu1");
let oyuncu2 = document.getElementById("oyuncu2");
let oyuncu3 = document.getElementById("oyuncu3");
let oyuncu4 = document.getElementById("oyuncu4");
let radio1 = document.getElementById("radio1");
let startGame = document.getElementById("start-game");
let input = document.getElementById("input1");
let tablePlayers = document.getElementById("table-players");
let tablePlayersScore = document.getElementById("table-players-score");

let startUser = document.getElementById("startUser");
let container = document.getElementById("container");

// butona tıkladığımda oyuncuları bana getiriyor

startGame.addEventListener("click", function () {
  let inputSayi = input.value;
  let td = ` 
                    <td class="oyuncu1">${oyuncu1.value}</td>
                    <td class="oyuncu2">${oyuncu2.value}</td>
                    <td class="oyuncu3">${oyuncu3.value}</td>
                    <td class="oyuncu4">${oyuncu4.value}</td>

 `;
  console.log(radio1.checked);
  if (oyuncu1.value == "") {
    alert("1.OYUNCUYU GİR");
    return;
  } else if (oyuncu2.value == "") {
    alert("2.OYUNCUYU GİR");
    return;
  } else if (oyuncu3.value == "") {
    alert("3.OYUNCUYU GİR");
    return;
  } else if (oyuncu4.value == "") {
    alert("4.OYUNCUYU GİR");
    return;
  } else if (input.value == "") {
    alert("LÜTFEN KAÇ EL OYNAYACAĞINIZI SEÇİN!!!");
    return;
  }
  let tr = document.createElement("tr");
  tr.innerHTML = td;
  tablePlayers.appendChild(tr);
  tablePlayersScore.appendChild(tr);

  // kaç el oynayacaksak o kadar alan getiren kod
  for (let i = 0; i < inputSayi; i++) {
    let input = ` 
    <td class="oyuncu1"><input id="textbox1-${i}" type="number"></td>
    <td class="oyuncu2"><input id="textbox2-${i}"type="number"></td>
    <td class="oyuncu3"><input id="textbox3-${i}" type="number"></td>
    <td class="oyuncu4"><input id="textbox4-${i}" type="number"></td>   
    <td><input type="checkbox" id="checkBox-${i}" onclick="check(${i})">el bitti</td>
    
`;
    let asd = `
<td class="oyuncu1"><label id="score1-${i}" ></label></td>
<td class="oyuncu2"><label id="score2-${i}"></label></td>
<td class="oyuncu3"><label id="score3-${i}" ></label></td>
<td class="oyuncu4"><label id="score4-${i}" ></label></td>  
`;
    let satir = document.createElement("tr");
    let bcd = document.createElement("tr");
    satir.innerHTML = input;
    bcd.innerHTML = asd;
    tablePlayers.appendChild(satir);
    tablePlayersScore.appendChild(bcd);

    // if(radio1.checked){
    //   document.getElementById("textbox1").style.backgroundColor  = "blue";
    // }
  }
  // hesaplama kısmı
  let inputTop = ` 
<td id="oyuncu1">0</td>
<td id="oyuncu2">0</td>
<td id="oyuncu3">0</td>
<td id="oyuncu4">0</td>
`;
  let top = document.createElement("tr");
  top.innerHTML = inputTop;
  tablePlayers.appendChild(top);

  container.innerHTML = "";
});

function check(id) {
  console.log(id);
  document.getElementById(`checkBox-${id}`).disabled = true;
  document.getElementById(`textbox1-${id}`).disabled = true;
  document.getElementById(`textbox2-${id}`).disabled = true;
  document.getElementById(`textbox3-${id}`).disabled = true;
  document.getElementById(`textbox4-${id}`).disabled = true;

  let score1 = document.getElementById(`textbox1-${id}`);
  let score2 = document.getElementById(`textbox2-${id}`);
  let score3 = document.getElementById(`textbox3-${id}`);
  let score4 = document.getElementById(`textbox4-${id}`);

  console.log(score1.value, score2.value, score3.value, score4.value);

  if (score1.value > score2.value) {
    console.log("score 1 2 den buyuk");
    if (score2.value > score3.value) {
      console.log("score 2 3 den buyuk");
      if (score3.value > score4.value) {
        console.log("score 1 en buyuk");
      } else {
        console.log("score 4 en buyuk");
      }
    }
  }

  document.getElementById(`score1-${id}`).innerHTML = score1.value;
  document.getElementById(`score2-${id}`).innerHTML = score2.value;
  document.getElementById(`score3-${id}`).innerHTML = score3.value;
  document.getElementById(`score4-${id}`).innerHTML = score4.value;
}
