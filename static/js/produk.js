// Script dari produk.html dipindahkan ke file ini
function bukaRestock(id, nama, stok, expiredDate) {
    document.getElementById('restockId').value = id;
    document.getElementById('restockExpiredDate').value = expiredDate || '';
    document.getElementById('restockInfo').textContent = `Produk: ${nama} | Stok saat ini: ${stok} pcs`;
    document.getElementById('modalRestock').classList.add('show');
}

function bukaEditProduk(prod) {
    document.getElementById('editIdProduk').value = prod.id;
    document.getElementById('editNamaProduk').value = prod.nama;
    document.getElementById('editKategori').value = prod.kategori;
    document.getElementById('editHargaBeli').value = prod.harga_beli;
    document.getElementById('editHargaJual').value = prod.harga_jual;
    document.getElementById('editStok').value = prod.stok;
    document.getElementById('editStokMinimum').value = prod.stok_minimum;
    document.getElementById('editSatuan').value = prod.satuan;
    document.getElementById('editExpiredDate').value = prod.expired_date || '';
    document.getElementById('modalEdit').classList.add('show');
}

document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', e => { if (e.target === el) el.classList.remove('show'); });
});
