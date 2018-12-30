function uploadTheImage()
{
  var sourceOfPicture = "saadi ugly.png";
  var img = document.getElementById('saadiPic');
  img.src = sourceOfPicture.replace('20x20', '25x25');
  if (img.style.display == "none")
  {
    img.style.display = "block";
  }
  else
  {
    img.style.display = "none";
  }
}
