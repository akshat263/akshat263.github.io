function uploadTheImage()
{
  var sourceOfPicture = "linkedIn DC.JPG";
  var img = document.getElementById('saadiPic');
  img.src = sourceOfPicture.replace('20x20', '25x25');
  if (img.style.display == "block")
  {
    img.style.display = "none";
  }
  else
  {
    img.style.display = "block";
  }
}
``
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySideNav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
