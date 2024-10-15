const toggleMenu = document.querySelector('nav .toggle-menu');
		const content = document.querySelector('#content');
		const closeBtn = document.querySelector('nav .nav-menu .close-btn');

		toggleMenu.addEventListener('click', function () {
			content.classList.add('active');
		})

		closeBtn.addEventListener('click', function () {
			content.classList.remove('active');
		})

		window.addEventListener('resize', function () {
			if(this.innerWidth > 576) {
				content.classList.remove('active');
			}
		})
  // Example chart for influencer campaigns
  var ctx = document.getElementById('influencerCampaignsChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
        label: "Campaigns",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        fill: false,
      }]
    },

    // Configuration options go here
    options: {
      title: {
        display: true,
        text: 'Influencer Campaigns Over Time'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
// Seleccionamos todos los botones del menú con la clase .menu-button
const buttons = document.querySelectorAll('.menu-button');

// Añadimos un event listener a cada botón
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remover la clase 'active' de todos los botones
        buttons.forEach(btn => btn.classList.remove('active'));

        // Añadir la clase 'active' solo al botón clicado
        this.classList.add('active');
    });
});