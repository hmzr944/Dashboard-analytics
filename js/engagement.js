// === Graphique Engagement par plateforme (Barres) ===
const ctxPlatforms = document.getElementById('platformChart').getContext('2d');
new Chart(ctxPlatforms, {
  type: 'bar',
  data: {
    labels: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter'],
    datasets: [{
      data: [3200, 5000, 2800, 1500],
      backgroundColor: ['#3b82f6','#e63946','#10b981','#f59e0b']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// === Graphique Courbe Taux d'engagement ===
const ctxEngagement = document.getElementById('engagementChart').getContext('2d');
new Chart(ctxEngagement, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Taux Engagement (%)',
      data: [2.5, 3.2, 3.8, 4.1, 4.5],
      borderColor: '#2563eb',
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