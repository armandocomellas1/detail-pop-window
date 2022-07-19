function mobileMenu(parameter) {
  if (parameter != "No") {
    document.getElementById('hambur_menu').style.dipslay = 'flex';
    document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'none';
    document.getElementsByClassName('menucontainer')[0].style.paddingBottom = '500px';
    document.getElementsByClassName('container')[0].style.backgroundImage  = "url('./img/shapes_1.svg')";
    document.getElementsByClassName('container')[0].style.backgroundRepeat  = 'no-repeat, repeat';
    document.getElementsByClassName('container')[0].style.backgroundPositionX  = 'center';
    document.getElementsByClassName('container')[0].style.backgroundSize  = '100% 100vh';
    document.getElementsByClassName('name_head')[0].style.display = 'none';
    document.getElementsByClassName('menu_ham_mob')[0].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[0].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[1].style.display = 'flex';
    document.getElementsByClassName('ham_menu')[2].style.display = 'flex';
  }
}

mobileMenu("No");

function desktopMob(parameter) {
  if(parameter != "No") {
    document.getElementsByClassName('name_head')[0].style.display = 'flex';
    document.getElementsByClassName('menucontainer')[0].style.paddingBottom = '0';
    document.getElementsByClassName('material-symbols-outlined')[0].style.display = 'flex';
    document.getElementsByClassName('container')[0].style.backgroundImage  = 'none';
    document.getElementsByClassName('menucontainer')[0].style.marginBottom = '0';
    document.getElementsByClassName('menu_ham_mob')[0].style.display = 'none';
    document.getElementsByClassName('ham_menu')[0].style.display = 'none';
    document.getElementsByClassName('ham_menu')[1].style.display = 'none';
    document.getElementsByClassName('ham_menu')[2].style.display = 'none';
  }
}

desktopMob("No");

function spanHidden() {
  document.getElementsByClassName('menu_ham_mob')[0].style.display = 'none';
}

spanHidden();

