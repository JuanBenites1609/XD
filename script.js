// Datos de ejemplo
const data = [
    { time: '00:00', temperature: 22, humidity: 60, soilMoisture: 40 },
    { time: '04:00', temperature: 20, humidity: 65, soilMoisture: 45 },
    { time: '08:00', temperature: 23, humidity: 55, soilMoisture: 35 },
    { time: '12:00', temperature: 26, humidity: 50, soilMoisture: 30 },
    { time: '16:00', temperature: 25, humidity: 52, soilMoisture: 32 },
    { time: '20:00', temperature: 23, humidity: 58, soilMoisture: 38 },
];

// Función para crear gráficos
function createChart(canvasId, label, data, yAxisLabel) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.time),
            datasets: [{
                label: label,
                data: data.map(d => d[yAxisLabel.toLowerCase()]),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: yAxisLabel
                    }
                }
            }
        }
    });
}

// Crear gráficos
createChart('temperatureChart', 'Temperatura', data, 'Temperatura (°C)');
createChart('humidityChart', 'Humedad', data, 'Humedad (%)');
createChart('soilMoistureChart', 'Humedad del Suelo', data, 'Humedad del Suelo (%)');

// Autenticación
document.getElementById('login').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('idealConditions').style.display = 'block';
    } else {
        alert('Credenciales incorrectas');
    }
});

// Cerrar sesión
document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('idealConditions').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Guardar condiciones ideales
document.getElementById('conditions').addEventListener('submit', function(e) {
    e.preventDefault();
    const idealTemp = document.getElementById('idealTemp').value;
    const idealHumidity = document.getElementById('idealHumidity').value;
    const idealSoilMoisture = document.getElementById('idealSoilMoisture').value;
    alert(`Condiciones guardadas: Temperatura ${idealTemp}°C, Humedad ${idealHumidity}%, Humedad del Suelo ${idealSoilMoisture}%`);
});

// Generar código QR
const qr = qrcode(0, 'M');
qr.addData('https://juanbenites1609.github.io/Prueba/');
qr.make();
document.getElementById('qrcode').innerHTML = qr.createImgTag(5);