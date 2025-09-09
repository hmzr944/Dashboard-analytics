// Helper: Save to localStorage
function saveSettings(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// Helper: Load from localStorage
function loadSettings(key, defaults = {}) {
  return JSON.parse(localStorage.getItem(key)) || defaults;
}

// Gestion de compte
const accountForm = document.getElementById('account-form');
const accountDefaults = { username: 'Admin', email: 'admin@email.com', password: '' };
const accountSettings = loadSettings('account', accountDefaults);
accountForm.username.value = accountSettings.username;
accountForm.email.value = accountSettings.email;
accountForm.password.value = '';

accountForm.addEventListener('submit', function(e) {
  e.preventDefault();
  saveSettings('account', {
    username: accountForm.username.value,
    email: accountForm.email.value,
    password: accountForm.password.value
  });
  alert('Profil sauvegardé !');
});

// Préférences d'affichage
const displayForm = document.getElementById('display-form');
const displayDefaults = { theme: 'clair', lang: 'fr', notif: false };
const displaySettings = loadSettings('display', displayDefaults);
displayForm.theme.value = displaySettings.theme;
displayForm.lang.value = displaySettings.lang;
displayForm.notif.checked = displaySettings.notif;

function applyTheme(theme) {
  if (theme === 'sombre') {
    document.body.style.background = '#222';
    document.body.style.color = '#eee';
  } else {
    document.body.style.background = '#f8f8f8';
    document.body.style.color = '#333';
  }
}
applyTheme(displaySettings.theme);

displayForm.addEventListener('submit', function(e) {
  e.preventDefault();
  saveSettings('display', {
    theme: displayForm.theme.value,
    lang: displayForm.lang.value,
    notif: displayForm.notif.checked
  });
  applyTheme(displayForm.theme.value);
  alert('Préférences d\'affichage sauvegardées !');
});

// Filtres et données
const filtersForm = document.getElementById('filters-form');
const filtersDefaults = {
  period: 'mois',
  lineChart: true,
  barChart: true,
  pieChart: false
};
const filtersSettings = loadSettings('filters', filtersDefaults);
filtersForm.period.value = filtersSettings.period;
filtersForm.lineChart.checked = filtersSettings.lineChart;
filtersForm.barChart.checked = filtersSettings.barChart;
filtersForm.pieChart.checked = filtersSettings.pieChart;

filtersForm.addEventListener('submit', function(e) {
  e.preventDefault();
  saveSettings('filters', {
    period: filtersForm.period.value,
    lineChart: filtersForm.lineChart.checked,
    barChart: filtersForm.barChart.checked,
    pieChart: filtersForm.pieChart.checked
  });
  alert('Filtres sauvegardés !');
});

document.getElementById('reset-filters').addEventListener('click', function() {
  filtersForm.period.value = filtersDefaults.period;
  filtersForm.lineChart.checked = filtersDefaults.lineChart;
  filtersForm.barChart.checked = filtersDefaults.barChart;
  filtersForm.pieChart.checked = filtersDefaults.pieChart;
  saveSettings('filters', filtersDefaults);
  alert('Filtres réinitialisés !');
});

// Sécurité et confidentialité
const securityForm = document.getElementById('security-form');
const securityDefaults = { twofa: false };
const securitySettings = loadSettings('security', securityDefaults);
securityForm.twofa.checked = securitySettings.twofa;

securityForm.addEventListener('submit', function(e) {
  e.preventDefault();
  saveSettings('security', {
    twofa: securityForm.twofa.checked
  });
  alert('Préférences de sécurité sauvegardées !');
});

document.getElementById('delete-account').addEventListener('click', function() {
  if (confirm('Voulez-vous vraiment supprimer votre compte ? Cette action est irréversible.')) {
    localStorage.clear();
    alert('Compte supprimé et paramètres réinitialisés.');
    window.location.reload();
  }
});