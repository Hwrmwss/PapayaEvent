function toggleDescription() {
  var descriptionText = document.getElementById("description-text");
  var button = document.querySelector("button");
  
  if (descriptionText.style.maxHeight) {
    descriptionText.style.maxHeight = null;
    button.innerHTML = "Mostra di più";
  } else {
    descriptionText.style.maxHeight = "none";
    button.innerHTML = "Mostra di meno";
  }
}

function toggleLike() {
  var likeButton = document.querySelector(".like-button");
  var likeCountElement = document.getElementById("like-count");
  var likeCount = parseInt(likeCountElement.innerText);
  
  if (likeButton.classList.contains("liked")) {
    likeCount--;
    likeButton.classList.remove("liked");
  } else {
    likeCount++;
    likeButton.classList.add("liked");
  }
  
  likeCountElement.innerText = likeCount;
  
  var heartAnimation = document.getElementById("heart-animation");
  heartAnimation.classList.add("show");
  setTimeout(function() {
    heartAnimation.classList.remove("show");
  }, 1000);
}
