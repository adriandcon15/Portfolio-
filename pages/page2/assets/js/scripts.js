function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open'); // Toggle the 'open' class to show/hide the menu
  }
  
  

  function openMedia(element) {
    const mediaOverlay = document.createElement('div');
    mediaOverlay.classList.add('media-overlay');
  
    const mediaClone = element.cloneNode(true);
    mediaClone.classList.add('focused-media');
  
    mediaOverlay.appendChild(mediaClone);
  
    mediaOverlay.onclick = () => {
      document.body.removeChild(mediaOverlay);
    };
  
    document.body.appendChild(mediaOverlay);
  }
  