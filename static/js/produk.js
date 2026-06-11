// Buka modal Restock — pakai data-* attribute dari button
function bukaRestock(btn) {
    const d = btn.dataset;
    document.getElementById('restockId').value = d.id;
    document.getElementById('restockExpiredDate').value = d.expired || '';
    document.getElementById('restockInfo').textContent = `Produk: ${d.nama} | Stok saat ini: ${d.stok}`;
    document.getElementById('modalRestock').classList.add('show');
}

// Buka modal Edit — pakai data-* attribute dari button
function bukaEditProduk(btn) {
    const d = btn.dataset;
    document.getElementById('editIdProduk').value = d.id;
    document.getElementById('editNamaProduk').value = d.nama;
    document.getElementById('editKategori').value = d.kategori;
    document.getElementById('editHargaBeli').value = d.hargaBeli;
    document.getElementById('editHargaJual').value = d.hargaJual;
    document.getElementById('editStok').value = d.stok;
    document.getElementById('editStokMinimum').value = d.stokMinimum;
    document.getElementById('editSatuan').value = d.satuan;
    document.getElementById('editExpiredDate').value = d.expired || '';
    document.getElementById('modalEdit').classList.add('show');
}

// Tutup modal kalau klik di luar area modal
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('show'); });
});

// Auto buka modal edit jika URL mengandung ?edit=id
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('edit');
    if (editId) {
        const editBtn = document.querySelector(`.btn-edit[data-id="${editId}"]`);
        if (editBtn) editBtn.click();
    }
});