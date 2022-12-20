const ctx2 = document.getElementById('doughnutChart').getContext('2d');

const myChart2= new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Check', 'Credit Card', 'Debit Card', 'Digital Wallet', 'Cash'],
        datasets: [{
          label: 'avarage transaction value',
          data: [46.86, 36.68, 28.86, 18.90, 4.81],
          backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)'
          ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });