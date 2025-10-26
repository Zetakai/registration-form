document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const modal = document.getElementById('popupModal');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.querySelector('.close');
    const closeModalBtn = document.getElementById('closeModal');
    
    // Function to show modal
    function showModal(message) {
        popupMessage.innerHTML = message;
        modal.style.display = 'block';
    }
    
    // Function to hide modal
    function hideModal() {
        modal.style.display = 'none';
    }
    
    // Close modal when clicking X or close button
    closeBtn.onclick = hideModal;
    closeModalBtn.onclick = hideModal;
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }
    
    // Function to convert numeric grade to letter grade
    function convertToLetterGrade(nilai) {
        if (nilai >= 90) return 'A';
        if (nilai >= 80) return 'B';
        if (nilai >= 70) return 'C';
        if (nilai >= 60) return 'D';
        return 'E';
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const namaDepan = document.getElementById('namaDepan').value.trim();
        const namaBelakang = document.getElementById('namaBelakang').value.trim();
        const nilaiAngka = document.getElementById('nilaiAngka').value;
        
        if (namaDepan && namaBelakang && nilaiAngka) {
            const namaLengkap = namaDepan + ' ' + namaBelakang;
            const nilaiHuruf = convertToLetterGrade(parseInt(nilaiAngka));
            
            const message = `Nama Lengkap : ${namaLengkap}\nNilai Angka : ${nilaiAngka}\nNilai Huruf : ${nilaiHuruf}`;
            
            // Show in console log
            console.log(message);
            
            // Create formatted message for popup with columns
            const formattedMessage = `
                <div style="text-align: left; font-family: monospace; line-height: 1.8;">
                    <div><strong>Nama Lengkap :</strong> ${namaLengkap}</div>
                    <div><strong>Nilai Angka :</strong> ${nilaiAngka}</div>
                    <div><strong>Nilai Huruf :</strong> ${nilaiHuruf}</div>
                </div>
            `;
            
            // Show in popup
            showModal(formattedMessage);
        } else {
            const errorMessage = 'Mohon isi semua field (nama depan, nama belakang, dan nilai angka)!';
            console.log(errorMessage);
            showModal(errorMessage);
        }
    });
});