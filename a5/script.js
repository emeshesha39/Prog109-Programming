document.addEventListener('DOMContentLoaded', function() {
    var images = ['https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?format=jpg&width=960', 
    'https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D', 
    'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg?auto=compress&cs=tinysrgb&w=800','https://imageio.forbes.com/specials-images/imageserve/5faad9ab2a368d4f8860532b/Best-Animal-Photos-Agora-Contest--mother-monkey-with-baby/960x0.jpg?format=jpg&width=1440'];
    var descriptions = ['Baby monkey, Location: Kedoya Utara, Indonesia', 'Zebra from serengeti, Senegal', 'Bengle Tiger from southern India', 'Macaw Bird from Amazon', 'Baby Chicks trying to take it first walk','Mother Bekantan Location: Cisarua, Indonesia.PHOTO: @IRAWANSUBINGAR (INDONESIA) - AGORA'];
    let currentImageIndex = 0;
  
    var imgElement = document.querySelector('.slideshow-container img');
    var descriptionElement = document.querySelector('.description');
  
    function showImage(index) {
      imgElement.src = images[index];
      descriptionElement.textContent = descriptions[index];
    }
  
    function showNextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage(currentImageIndex);
    }
  
    function showPreviousImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(currentImageIndex);
    }
  
    document.getElementById('nextBtn').addEventListener('click', showNextImage);
    document.getElementById('prevBtn').addEventListener('click', showPreviousImage);
  
    // Automatically change images every 3 seconds
    setInterval(showNextImage, 3000);
  });