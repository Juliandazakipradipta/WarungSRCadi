// Tutup modal saat klik overlay
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', function (e) {
        if (e.target === this) this.classList.remove('show');
    });
});

// Hamburger menu untuk mobile/tablet
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebarOverlay');
const btnHam = document.getElementById('btnHamburger');

function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

if (btnHam) btnHam.addEventListener('click', openSidebar);
if (overlay) overlay.addEventListener('click', closeSidebar);

// Tutup sidebar otomatis saat klik nav item di HP
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) closeSidebar();
    });
});

// Tutup sidebar saat resize ke desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeSidebar();
});