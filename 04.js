class Mahasiswa {
  constructor(nama, nim, nilai, kelas, jurusan) {
    this.nama = nama;      // Atribut publik
    this.nim = nim;        // Atribut publik
    this.kelas = kelas;    // Atribut publik
    this.jurusan = jurusan; // Atribut publik
    let _nilai = nilai;     // Atribut private menggunakan closure

    // Getter untuk mengakses nilai
    this.getNilai = function() {
      return _nilai;
    };

    // Setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaiBaru) {
      if (nilaiBaru >= 0 && nilaiBaru <= 100) {
        _nilai = nilaiBaru;
        console.log(`Nilai berhasil diubah menjadi ${nilaiBaru}`);
      } else {
        console.log('Nilai harus antara 0 dan 100');
      }
    };
  }

  // Method untuk menampilkan informasi mahasiswa
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Kelas: ${this.kelas}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Nilai: ${this.getNilai()}`);
    console.log('-------------------');
  }
}

// Contoh penggunaan:
console.log('=== MEMBUAT OBJEK MAHASISWA ===');
const mhs1 = new Mahasiswa('Rahmat keinjek', '0099', 85, 'IP999', 'Teknik Informatika');
mhs1.tampilkanInfo();

console.log('\n=== MEMANGGIL GETTER ===');
console.log(`Nilai mhs1: ${mhs1.getNilai()}`);

console.log('\n=== MEMANGGIL SETTER (VALID) ===');
mhs1.setNilai(90);
mhs1.tampilkanInfo();

console.log('\n=== MEMANGGIL SETTER (INVALID) ===');
mhs1.setNilai(150);  // Akan menampilkan pesan error
mhs1.setNilai(-10);  // Akan menampilkan pesan error
