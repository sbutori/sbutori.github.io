// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click

function activateGallery() {
  // let thumbnails = document.querySelector("#gallery-thumbs").
  //                           querySelectorAll("img");
  // Exercise 11.2
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage  = document.querySelector("#gallery-photo > img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as display image.
      let newImageSrc = thumbnail.dataset.largeVersion;
      let newImageAlt = thumbnail.alt;
      // Exercise 11.3
      // let currentClass = "current"

      // Change which image is current.
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info
      mainImage.setAttribute("src", newImageSrc);
      mainImage.setAttribute("alt", newImageAlt);
      let galleryInfo = document.querySelector("#gallery-info")
      let title         = galleryInfo.querySelector(".title");
      let newTitle      = thumbnail.dataset.title;
      title.textContent = newTitle;
      let description         = galleryInfo.querySelector(".description");
      let newDescription      = thumbnail.dataset.description;
      description.textContent = newDescription;
    });
  });
}

