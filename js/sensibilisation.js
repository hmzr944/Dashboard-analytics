// === Graphique Tendance des clics ===
const ctxClick = document.getElementById('clickChart').getContext('2d');
new Chart(ctxClick, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
      label: 'Clics',
      data: [12000, 15000, 18000, 16000, 20000, 22000],
      borderColor: '#e63946',
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// === Graphique Sources de trafic ===
const ctxTraffic = document.getElementById('trafficChart').getContext('2d');
new Chart(ctxTraffic, {
  type: 'doughnut',
  data: {
    labels: ['Google Ads', 'Facebook Ads', 'Instagram', 'Email'],
    datasets: [{
      data: [45, 25, 20, 10],
      backgroundColor: ['#e63946','#f59e0b','#3b82f6','#10b981']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      }
    }
  }
});
