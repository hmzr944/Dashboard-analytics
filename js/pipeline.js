// === Graphique Entonnoir (Pipeline) ===
const ctxFunnel = document.getElementById('funnelChart').getContext('2d');
new Chart(ctxFunnel, {
  type: 'bar',
  data: {
    labels: ['Prospects', 'Leads Qualifiés', 'Opportunités', 'Clients'],
    datasets: [{
      data: [500, 300, 120, 50],
      backgroundColor: ['#3b82f6','#2563eb','#1d4ed8','#1e40af']
    }]
  },
  options: {
    responsive: true,
    indexAxis: 'y', // horizontal bars
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { beginAtZero: true }
    }
  }
});

// === Graphique Évolution des Leads (Ligne) ===
const ctxLeads = document.getElementById('leadsChart').getContext('2d');
new Chart(ctxLeads, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai'],
    datasets: [{
      label: 'Leads',
      data: [50, 70, 120, 90, 150],
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
