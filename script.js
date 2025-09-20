const main = document.getElementById("main");
const main_load = document.getElementById("main_load");
const buttons = document.getElementById("buttons");
const nickname = document.getElementById("nickname")


setTimeout(() => {
  main.style.opacity = "1";
  setTimeout(() => {
    main_load.style.height = "250px";
    main_load.style.top = "0";
    main_load.style.borderRadius = "10px"
    document.getElementById("name").style.fontSize = "50px";
    document.getElementById("name").style.top = "60%"
    document.getElementById("name").style.opacity = "0";
    document.getElementById("buttons").style.display = 'block'
    setTimeout(() => {
      document.getElementById("name").innerHTML = "BIOGRAPHY";
      document.getElementById("buttons").style.opacity = "1";
      document.getElementById("nickname").style.opacity = "1";
      setTimeout(() => {
        document.getElementById("name").style.opacity = "1";
      },200)
    }, 500)
  }, 2000);
}, 1000);
