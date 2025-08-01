document.addEventListener('DOMContentLoaded', function() {
    fetch('sidebar-nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('nav-container').innerHTML = data;
        
        // Re-run any necessary scripts after loading the navigation
        const script = document.createElement('script');
        script.textContent = document.querySelector('#nav-container script').textContent;
        document.body.appendChild(script);
      });
  });