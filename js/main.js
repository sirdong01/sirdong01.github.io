// Document on load event
window.addEventListener('load', function () {
  document.getElementById("preloader").classList.add("fadehide");
})

// background
var bg_image = document.querySelectorAll('.background'), i;

for (i = 0; i < bg_image.length; ++i) {
  bg_image[i].style.backgroundImage = "url(" + bg_image[i].getAttribute('data-bg') + ")";
};

// toggle button
(function () {

  var toggle = document.querySelector('.nav-switch');
  var parent = document.querySelector('.parent');
  var basic = document.querySelector('.basic-section')

  toggle.addEventListener('click', function () {

    parent.classList.toggle('action');

  });
  basic.addEventListener('click', function () {

    parent.classList.remove('action');

  });

})();

// appear
let observedElements = document.querySelectorAll('.inview-element');
// Define the elements you want to intiate an action on

const options = { //define your options
  threshold: 0.5 //50% of the element in view
}

const inViewCallback = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // define the event/property you want to use
      entry.target.classList.add('inview');
      //do something with the element
    }
  });
}

let observer = new IntersectionObserver(inViewCallback, options);
// create a new instance using our callback which contains our elements and actions, using the options we defined

observedElements.forEach(element => {
  observer.observe(element) // run the observer 
});

// Glightbox
var lightbox = GLightbox();
lightbox.on('open', (target) => {
  console.log('lightbox opened');
});
var lightboxDescription = GLightbox({
  selector: '.glightbox2'
});
var lightboxVideo = GLightbox({
  selector: '.glightbox3'
});
lightboxVideo.on('slide_changed', ({ prev, current }) => {
  console.log('Prev slide', prev);
  console.log('Current slide', current);

  const { slideIndex, slideNode, slideConfig, player } = current;

  if (player) {
    if (!player.ready) {
      // If player is not ready
      player.on('ready', (event) => {
        // Do something when video is ready
      });
    }

    player.on('play', (event) => {
      console.log('Started play');
    });

    player.on('volumechange', (event) => {
      console.log('Volume change');
    });

    player.on('ended', (event) => {
      console.log('Video ended');
    });
  }
});

var lightboxInlineIframe = GLightbox({
  selector: '.glightbox4'
});
