class Mahasiswa {
    constructor(nama, nim, jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }
  
    displayInfo() {
        console.log('\n=== MAHASISWA AKTIF ===');
        console.log(`Mahasiswa: ${this.nama} ${this.nim} (${this.jurusan})`);
    }
}

// Class anak pertama: MahasiswaSarjana
class MahasiswaSarjana extends Mahasiswa {
    constructor(nama, nim, jurusan, semester, ipk, sks, pembimbing, skripsi) {
        super(nama, nim, jurusan);
        this.semester = semester;
        this.ipk = ipk;
        this.sks = sks;
        this.pembimbing = pembimbing;
        this.skripsi = skripsi;
    }

    hitungProgress() {
        return (this.sks / 144) * 100;
    }

    cekLulus() {
        return this.sks >= 144 && this.ipk >= 2.0;
    }

    updateIpk(ipkBaru) {
        this.ipk = ipkBaru;
    }

    tampilkanDetail() {
        console.log(`${this.nama} - Semester ${this.semester}, IPK: ${this.ipk}, Skripsi: ${this.skripsi}`);
    }
}

// Class anak kedua: MahasiswaMagister
class MahasiswaMagister extends Mahasiswa {
    constructor(nama, nim, jurusan, semester, ipk, sks, promotor, tesis) {
        super(nama, nim, jurusan);
        this.semester = semester;
        this.ipk = ipk;
        this.sks = sks;
        this.promotor = promotor;
        this.tesis = tesis;
    }

    hitungProgress() {
        return (this.sks / 36) * 100;
    }

    cekSidang() {
        return this.sks >= 36 && this.ipk >= 3.0;
    }

    gantiPromotor(promotorBaru) {
        this.promotor = promotorBaru;
    }

    tampilkanDetail() {
        console.log(`${this.nama} - Semester ${this.semester}, IPK: ${this.ipk}, Tesis: ${this.tesis}`);
    }
}

// Instance yang sudah ada
const Mahasiswa1 = new Mahasiswa('Falah', '0080', 'Informatika');
const Mahasiswa2 = new Mahasiswa('abdul kopling', '0099', 'Informatika');
const Mahasiswa3 = new Mahasiswa('ramdani anak baik', '0001', 'Informatika');

Mahasiswa1.displayInfo();
Mahasiswa2.displayInfo();
Mahasiswa3.displayInfo();

// Instance baru
const sarjana1 = new MahasiswaSarjana('Budi', '2021001', 'Informatika', 7, 3.4, 120, 'Dr. Ahmad', 'Sistem AI');
const magister1 = new MahasiswaMagister('Sari', '2022001', 'Informatika', 3, 3.7, 24, 'Prof. Rina', 'Deep Learning');

console.log('\n=== MAHASISWA SARJANA ===');
sarjana1.tampilkanDetail();
console.log(`Progress: ${sarjana1.hitungProgress().toFixed(1)}%`);
console.log(`Status Lulus: ${sarjana1.cekLulus()}`);

console.log('\n=== MAHASISWA MAGISTER ===');
magister1.tampilkanDetail();
console.log(`Progress: ${magister1.hitungProgress().toFixed(1)}%`);
console.log(`Bisa Sidang: ${magister1.cekSidang()}`);
