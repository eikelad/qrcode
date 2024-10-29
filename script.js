// script.js
document.getElementById('generateButton').addEventListener('click', function() {
    const qrText = document.getElementById('qrText').value;
    if (qrText.trim() === '') {
        alert('Por favor, insira um texto ou URL para gerar o QR Code.');
        return;
    }

    const qrCodeContainer = document.getElementById('qrCodeContainer');
    qrCodeContainer.innerHTML = '';

    const qrCodeImage = document.createElement('img');
    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrText)}&size=150x150&color=2e7d32`;
    qrCodeImage.alt = 'QR Code';

    qrCodeContainer.appendChild(qrCodeImage);
});
