let mahasiswa = new Map();

mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Citra");
mahasiswa.set("002", "Citra"); 

console.log(mahasiswa.get("001")); 
console.log(mahasiswa.get("002")); 
console.log(mahasiswa.get("003")); 

function printItems(items) {
    items.forEach(item => console.log(item));
}

printItems([1, 2, 3]);
printItems(["A", "B", "C"]);
printItems([1, 2, 3, "A", "B", "C"]); 

let mahasiswa = new Map();

mahasiswa.set("22001", { nama: "Andi", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });
mahasiswa.set("22003", { nama: "Citra", jurusan: "Teknik Komputer" });

console.log(mahasiswa.get("22001").nama); 
console.log(mahasiswa.get("22002").nama); 
console.log(mahasiswa.get("22003").nama);


console.log("=== Data Semua Mahasiswa ===");
mahasiswa.forEach((data, nim) => {
    console.log(`NIM: ${nim}, Nama: ${data.nama}, Jurusan: ${data.jurusan}`);
});

let tugas = new Set();

tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP ");

console.log(tugas);
