// app.js
const ctxLine = document.getElementById('lineChart').getContext('2d');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['2014', '2015', '2016', '2017', '2018'],
    datasets: [
      {
        label: 'Total Visites',
        data: [600000, 650000, 700000, 850000, 900000],
        borderColor: '#2b6cb0',
        fill: false
      },
      {
        label: 'Nouvelles Visites',
        data: [400000, 300000, 320000, 350000, 370000],
        borderColor: '#e63946',
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
  type: 'bar',
  data: {
    labels: ['Amérique', 'Europe', 'Asie', 'Afrique', 'Océanie'],
    datasets: [{
      data: [1170000, 365210, 393555, 272686, 91170],
      backgroundColor: '#e63946'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});
   document.querySelectorAll('.kpi-card').forEach((card, i) => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.transition = 'opacity 0.6s';
        card.style.opacity = 1;
      }, 200 + i * 150);
    });