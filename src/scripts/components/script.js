document.addEventListener("DOMContentLoaded", function (event) {

  //menu
  var menu = document.querySelector('.menu');
  var closeMenu = document.querySelector('.closeMenu');


  menu.addEventListener('click', OpenMenu);
  closeMenu.addEventListener('click', CloseMenu);

  var sideNav = document.getElementById("mySidenav");
  var navBar = document.getElementById("navbar");

  function OpenMenu() {
    sideNav.style.width = '100%';
    sideNav.style.zIndex = '2';
    navBar.style.visibility = 'hidden';
  }

  function CloseMenu() {
    sideNav.style.width = '0%';
    sideNav.style.zIndex = '2';
    navBar.style.visibility = 'visible';
    navBar.style.zIndex = '1';
  }

  //curseur
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
    cursor.setAttribute("style","top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
  })

  document.addEventListener('click', () => {
    cursor.classList.add("expand")

    setTimeout(() => {
      cursor.classList.remove("expand")
    },500)
  })


  //test
  console.log("Ça fonctionne!!!");


});
