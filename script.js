document.addEventListener("DOMContentLoaded", function() {
    // Fungsi untuk menganimasikan teks satu per satu
    function animateText(id, delay) {
      const textElement = document.getElementById(id);
      const text = textElement.innerText.split(" "); // Pisahkan teks menjadi kata-kata
      textElement.innerHTML = ""; // Kosongkan konten teks yang ada
  
      text.forEach((word, index) => {
        // Buat elemen span untuk setiap kata dan beri kelas animasi
        const span = document.createElement("span");
        span.classList.add("animated-text");
        span.innerText = word + " ";
        textElement.appendChild(span);
  
        // Set delay berdasarkan urutan kata
        span.style.animationDelay = `${index * delay}s`;
      });
    }
  
    // Panggil fungsi untuk animasi teks dengan delay 0.2 detik
    animateText("welcome-heading", 0.2);
    animateText("welcome-text", 0.2);
  
    // Memastikan musik auto-play dan di-unmute setelah beberapa detik
    const musicPlayer = document.getElementById("music-player");
  
    // Tunggu beberapa detik untuk memastikan audio mulai diputar
    setTimeout(() => {
      musicPlayer.muted = false; // Hapus mute agar audio terdengar
      musicPlayer.play();        // Pastikan lagu diputar
    }, 2000); // Delay 2 detik (untuk memastikan audio diputar setelah konten halaman muncul)
  
    // Menangani klik tombol WhatsApp
    const whatsappBtn = document.getElementById("whatsapp-btn");
    whatsappBtn.addEventListener("click", function() {
      const nomorWhatsApp = "6282244101285";  // Ganti dengan nomor WhatsApp Anda
      const pesan = "Haloo chelsea, save kaka yaa!";  // Pesan otomatis
      const urlWhatsApp = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
  
      // Membuka WhatsApp dengan pesan otomatis
      window.open(urlWhatsApp, "_blank");
    });
  });
  