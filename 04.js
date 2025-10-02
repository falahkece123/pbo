class Mahasiswa {
  constructor(nama, nim, kelamin, kelas, jurusan) {
    this.nama = nama;      // Atribut publik
    this.nim = nim;        // Atribut publik
    this.kelas = kelas;    // Atribut publik
    this.jurusan = jurusan; // Atribut publik
    let _kelamin = kelamin;     // Atribut private menggunakan closure
    
    // Getter untuk mengakses nilai
    this.getKelamin = function() {
      return _kelamin;
    };
    
    // Setter untuk mengubah nilai dengan validasi
    this.setKelamin = function(kelaminBaru) {
      if (kelaminBaru === 'Laki-laki' || kelaminBaru === 'Perempuan') {
        _kelamin = kelaminBaru;
        console.log(`Kelamin berhasil diubah menjadi ${kelaminBaru}`);
      } else {
        console.log('Kelamin harus jelas (Laki-laki/Perempuan)!!!');
      }
    };
  }
  
  // Method untuk menampilkan informasi mahasiswa
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`NIM: ${this.nim}`);
    console.log(`Kelas: ${this.kelas}`);
    console.log(`Jurusan: ${this.jurusan}`);
    console.log(`Kelamin: ${this.getKelamin()}`);
    console.log('-------------------');
  }
}

// Contoh penggunaan:
console.log('=== MEMBUAT OBJEK MAHASISWA ===');
const mhs1 = new Mahasiswa('Rahmat keinjek', '0099', 'Tidak Diketahui', 'IP999', 'Teknik Informatika');
mhs1.tampilkanInfo();

console.log('\n=== MEMANGGIL GETTER ===');
console.log(`Kelamin mhs1: ${mhs1.getKelamin()}`);

console.log('\n=== MEMANGGIL SETTER (VALID) ===');
mhs1.setKelamin('Laki-laki');
mhs1.tampilkanInfo();

console.log('\n=== MEMANGGIL SETTER (INVALID) ===');
mhs1.setKelamin('Tidak Valid');
