// ============================================
// 2.1. TRY-CATCH-FINALLY
// ============================================

try {
  let mahasiswa = ["Andi", "Budi", "Citra"];
  console.log(mahasiswa[5].toUpperCase());
} catch (error) {
  console.log("Terjadi error: " + error.message);
} finally {
  console.log("Proses selesai.");
}

// Output:
// Terjadi error: Cannot read properties of undefined (reading 'toUpperCase')
// Proses selesai.


// ============================================
// 2.2. PENGGUNAAN THROW
// ============================================

function cekUsia(usia) {
  if (usia < 18) {
    throw new Error("Maaf, Anda belum cukup umur!");
  }
  return "Selamat datang!";
}

try {
  console.log(cekUsia(16));
} catch (error) {
  console.log("Terjadi kesalahan: " + error.message);
}

// Output:
// Terjadi kesalahan: Maaf, Anda belum cukup umur!


// ============================================
// 3. CUSTOM ERROR HANDLING
// ============================================

class ValidasiError extends Error {
  constructor(pesan) {
    super(pesan);
    this.name = "ValidasiError";
  }
}

function cekNama(nama) {
  if (nama.length < 3) {
    throw new ValidasiError("Nama terlalu pendek!");
  }
  return `Nama valid: ${nama}`;
}

try {
  console.log(cekNama("Jo"));
} catch (error) {
  if (error instanceof ValidasiError) {
    console.log("Terjadi kesalahan validasi: " + error.message);
  } else {
    console.log("Kesalahan lain: " + error.message);
  }
}

// Output:
// Terjadi kesalahan validasi: Nama terlalu pendek!
