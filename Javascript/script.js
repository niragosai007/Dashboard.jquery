 
  $(document).ready(function(){
    $(".sidebar-btn").click(function(){
     $(".wrpper").toggleClass("collapse");
    })
   });

   const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Earnings in $',
        data: [2050,1900,2100,1800,2800,2500,2600,2450,1950,2300,2900],
        backgroundcolor:[
              'rgba(85,85,85,1)',
        ],
        bordercolor:[
          'rgb(41,155,99)',
        ],
        borderWidth: 1

      
      }]
    },
    options: {
      responsive:true 
    }
  });

  