function setLanguage(lang) {
    // Simpan pilihan
    try { localStorage.setItem('mendoanLang', lang); } catch(e) {}

    // Tampilkan/sembunyikan konten berdasarkan data-lang
    document.querySelectorAll('[data-lang]').forEach(function(el) {
        if (el.getAttribute('data-lang') === lang) {
            el.classList.add('lang-show');
        } else {
            el.classList.remove('lang-show');
        }
    });

    // Update tombol aktif
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        if (btn.getAttribute('data-lang-btn') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update atribut lang
    document.documentElement.setAttribute('lang', lang);
}

// Klik tombol
document.addEventListener('click', function(e) {
    var btn = e.target.closest('.lang-btn');
    if (btn) {
        var lang = btn.getAttribute('data-lang-btn');
        setLanguage(lang);
    }
});

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    var saved = 'id';
    try { saved = localStorage.getItem('mendoanLang') || 'id'; } catch(e) {}
    setLanguage(saved);
});