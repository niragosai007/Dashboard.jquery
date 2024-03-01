const chartData = {
   labels: ["Academic", "Non-academic", "Administration", "Others"],
   data: [ 42,12,8,6]
};


const ctx = document.getElementById('doughnut');
 

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Academic", "Non-academic", "Administration", "Others"],
    datasets: [{
      label: 'Earnings in $',
      data: [ 42,12,8,6],
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
