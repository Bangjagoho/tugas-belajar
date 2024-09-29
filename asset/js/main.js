// Fungsi untuk menampilkan status koneksi dompet
function displayWalletStatus(statusText) {
    const walletStatus = document.getElementById("walletStatus");
    if (walletStatus) {
        walletStatus.innerText = statusText;
    }
}

// Fungsi untuk menampilkan pesan status umum (misalnya saat upload file)
function displayStatusMessage(message, isError = false) {
    const statusElement = document.getElementById("status");
    if (statusElement) {
        statusElement.innerText = message;
        statusElement.style.color = isError ? 'red' : 'green';
    }
}

// Fungsi untuk melakukan smooth scrolling saat user mengklik navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
