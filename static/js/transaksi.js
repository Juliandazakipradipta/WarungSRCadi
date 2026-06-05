// Script dari transaksi.html dipindahkan ke file ini
// Data produk dari Flask (dikirim sebagai JSON)
// Jika ingin menggunakan file JSON statis, ganti baris di bawah ini dengan fetch ke file JSON
const produkData = {{ produk_list | tojson }}; // <-- GANTI DENGAN FETCH JIKA PERLU
let itemCount = 0;

function formatRp(n) {
    return 'Rp ' + Math.round(n).toLocaleString('id-ID');
}

function tambahBaris() {
    itemCount++;
    const opts = produkData.map(p =>
        `<option value="${p.id_produk}" data-harga="${p.harga_jual}" data-stok="${p.stok}">
            ${p.nama_produk} (Stok: ${p.stok})
        </option>`
    ).join('');
    // ...lanjutan script pindahkan dari transaksi.html...
}
