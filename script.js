$(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 49) {
          $('body').addClass('header-fixed');
      } else {
          $('body').removeClass('header-fixed');
      }
      // change the style of the navbar when the user scrolls into the next zone.
      // get the distance of the 2nd section from the top of the page - height of header.
      var topOffset = $('#demosection2').offset().top;
      var headerHeight = $('#topnav').height();
      var transitionPoint = topOffset - headerHeight;
      if (scrollTop > transitionPoint) {
          $('#topnav').addClass('alt-header');
      } else {
          $('#topnav').removeClass('alt-header');
      }
    });
  });
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
  