document.addEventListener('DOMContentLoaded', function() {
    // Grafik verileri
    var data = {
      labels: ['Januray', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Gain',
        data: [10, 30, 80, 43, 42, 10, 45],
        backgroundColor: 'rgba(255, 165, 0, 0.5)', // Çubukların arka plan rengi
        borderColor: 'rgba(255, 165, 0, 0.5)', // Çubukların kenar rengi
        borderWidth: 1
      },
      {
        label: 'Lost', // Negatif veriler için etiket
        data: [-10, -25,-17 ,-8, -10, -15, -45], // Negatif veri seti
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Negatif verilerin arka plan rengi
        borderColor: 'rgba(255, 99, 132, 0.5)', // Negatif verilerin kenar rengi
        borderWidth: 1
      }]
    };
  
    // Grafik ayarları
    var options = {
      scales: {
        y: {
          beginAtZero: true // Y ekseninin sıfırdan başlamasını sağlar
        }
      },
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: function(context) {
              var label = context.dataset.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat().format(context.parsed.y);
              }
              return label;
            }
          }
        }
      }
    };
  
    // Grafik oluşturma
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  });
  