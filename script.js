// Aktivitas 1
// Mencetak sebuah nilai dengan cara console.log("")

console.log("=== Selamat Datang Di Kalkulator Nilai Rapor");
console.log("Script Javascript Telah Terhubung");

// Aktivitas 2
// Membuat sebuah variabel let & const

// const sifatnya tidak bisa diubah/tetap
const NAMA_KAMPUS = "UPI PWK" // nama sekolah itu tidak dapat diubah
const MATA_KULIAH = ["SCM", "Promnet", "Metopen"]; // mata kuliah tidak dapat diubah

// let sifat nya bisa berubah sewaktu waktu
let NAMA_DOSEN = "Tio Adrian"; // si Tio ini bisa diubah ubah
let KELAS_PRAKTIKUM = "3B"; // kelas praktikum bisa diubah

// Mencetak sebuah nilai dengan operator "+" -> tujuannya untuk menggabungkan variabel
console.log("Kampus : " + NAMA_KAMPUS); // Tampilkan nama kampus menggunakan variabel
console.log("Kelas Praktikum : " + KELAS_PRAKTIKUM); // Tampilkan kelas praktikum
console.log("Nama Dosen : " + NAMA_DOSEN); // Tampilkan nama dosen

//DEMO PERBEDAAN LET VS CONST

// 1. let nilainya bisa diubah

NAMA_DOSEN = "Burhan";
console.log("Nama Dosen : " + NAMA_DOSEN);

// 2. const / konstanta  nilai nya tidak bisa diubah / tetap
// NAMA_KAMPUS = "UPI BUMSIL"; // nilai tetap dan coba diubah menyebabkan TypeError
// console.log("Nama Kampus:" + NAMA_KAMPUS); // -


// Input Interaktif
// alert () tujuannya untuk menampilkan pesan ke user berupa pop up
alert("Selamat Datang di Aplikasi Kalkulator Nilai Rapor Kelas!");

// promt() menampilkan dialog input teks dan disimpan ke variabel NAMA_MAHASISWA
let NAMA_MAHASISWA = prompt("Halo! Masukan nama kamu untuk memulai: ");

// Logika Conditional Statement / percabangan

if (NAMA_MAHASISWA) {
    // Jika Mahasiswa Mengisi nama maka ada greetings kondisi pertama
    alert("Halo, " + NAMA_MAHASISWA + "! Yuk kita hitung nilai rapot kamu.");
    console.log("Siswa yang aktif : " + NAMA_MAHASISWA);
} else {
    // Jika Mahasiswa Tidak Mengisi nama maka disebut anonim
    alert("Kamu tidak memasukan nama. Kamu akan dipanggil Anonymous");
    NAMA_MAHASISWA = "Mahasiswa Anonymous";
    console.log("Mahasiswa Anonymous " + NAMA_MAHASISWA);
}

// Aktivitas 3 Operator Aritmatika - Hitung Nilai Rata-rata
// Simpan nilai tiga matakuliah

// Deklarasi jumlah ketiga matakuliah
let NILAI_SCM = 80; // Nilai SCM
let NILAI_PROMNET = 100; // Nilai Promnet
let NILAI_METOPEN = 90; // Nilai Metopen

// Hitung jumlah ketiga mata kuliah
let JUMLAH_NILAI = NILAI_SCM + NILAI_PROMNET + NILAI_METOPEN;

// Bagi jumlah dengan 3 matakuliah uentuk mendapat rata-rata
// Tanda "/" fungsinya untuk membagi
let NILAI_RATARATA = JUMLAH_NILAI / 3;

// Cetak rinciannya ke console
console.log("=== Nilai " + NAMA_MAHASISWA + "===");
console.log("Nilai SCM : " + NILAI_SCM);
console.log("Nilai Promnet : " + NILAI_PROMNET);
console.log("Nilai Metopen : " + NILAI_METOPEN);

// Tampilkan jumlah nilai ke console
console.log("Jumlah Nilai Anda Adalah " + JUMLAH_NILAI);

// Tampilkan Rata-rata nilai ke console
console.log("Rata-rata Nilai Anda Adalah " + NILAI_RATARATA);

// Aktivitas 4 : Percabangan / Conditional Statement

// Bat variabel kosong untuk menyimpan predikat / grade dengan keterangan
let PREDIKAT = ""; // Predikat akan diisi "A" "B" "C" Atau "D"
let KETERANGAN = ""; // Keterangan akan diisi sangat baik, baik, cukup baik, belajar lagi

// Percabangan if, else if, else di evaluasi dari atas kebawah
// begitu kondisi blok ke 1 terpenuhi maka akan dijalankan
// Jika tidak terpenuhi maka akan dilewati dan masuk ke kondisi ke 2

if (NILAI_RATARATA >= 90) {
    // Kondidi ini yang akan dicek pertama : apakah milai lebih dari 90?
    PREDIKAT = "A";
    KETERANGAN = "Sangat Baik";
} else if (NILAI_RATARATA >= 80) {
    // Kondisi kedua dimana apakah nilai lebih dari 80?
    PREDIKAT = "B";
    KETERANGAN = "BAIK";
} else if (NILAI_RATARATA >= 70) {
    // Kondisi kedua dimana apakah nilai lebih dari 70?
    PREDIKAT = "C";
    KETERANGAN = "BELAJAR LAGI";
} else {
    // Jika semua kondisi di atas tidak memenuhi
    PREDIKAT = "D";
    KETERANGAN = "PULANG AJA";
}

// Tampilkan Predikat + Keterangan
console.log("Predikat Anda adalah :" + PREDIKAT + " Keterangan : " + KETERANGAN);

// Tampilkan juga ringkasan
alert(
    "Hasil Rapor " + NAMA_MAHASISWA + ":\n" +  // \n artinya ganti baris (enter) di dalam alert 
    "Rata-rata : " + NILAI_RATARATA + ":\n" + 
    "Predikat :" + PREDIKAT + " Keterangan : " + KETERANGAN
);

// Aktivitas ke 5 Funciton / Fungsi
// fungtion adalah cara kita membungkus sekumpulan kode menjadi satu blok
// yang nanti nya bisa dipanggil kapan saja dengan nama function yang sudah dibuat
// struktur -> function NAMA_FUNGSI(parameter1, parameter2, parameter3); (...)

function HITUNG_RATARATA(nilai1, nilai2, nilai3) {
    let JUMLAH = nilai1 + nilai2 + nilai3; // jumlahkan dari ketiga nilai atau parameter yang diterima
    return JUMLAH / 3; //Veriabel JUMLAH dikembalikan lalu dibagi 3
}

// Menghitung Predikat

function TENTUKAN_PREDIKAT(PREDIKAT) {
    // Cnditional Statement "if" disini langsung kasih "return" jika kondisi terpenuhi
    if (PREDIKAT >= 90) return "A - Sangat Baik";
    if (PREDIKAT >= 80) return "B - BAIK";
    if (PREDIKAT >= 70) return "C - BELAJAR LAGI";
    return "D - PULANG AJA";
}

// Contoh Penggunaan Function
// Mengitung nilai siswa a dengan function yang sudah dibuat
let NILAI_MAHASISWA_A = HITUNG_RATARATA(80, 75, 85);

// Tentukan predikat mahasiswa a dengan function predikat
let PREDIKAT_MAHASISWA_A = TENTUKAN_PREDIKAT(NILAI_MAHASISWA_A);

// Cetak Function
console.log("=== DATA MAHASISWA A");
console.log("Rata- Rata adalah " + NILAI_MAHASISWA_A);
console.log("Predikat adalah " + PREDIKAT_MAHASISWA_A);


// Aktivitas 6 karakter for loop (Looping for & Array)

// Array DAFTAR_MAHASISWA yang diisi Nama Mahasiswa
let DAFTAR_MAHASISWA = [
    "Burhan",
    "Herwin",
    "Sabrina",
    "Nava",
    "Tio"
];

// Tampilkan Judul sebelum cetak array daftar mahasiswa
console.log("=== Daftar MAHASISWA " + KELAS_PRAKTIKUM + "===");

// for loop digunakan untuk mengulang sebuah kode berkali-kali
// struktur nya-> (awal; kondisi; langkah)
// let i = 0 => mualai dari index ke 1 karena array mulai dari index 0
// i < DAFTAR_MAHASISWA.lenghth; mengulangi selama i masih kurang 5 maka jalankan jika sudah stop
// i++ => increment setelah setiap satu putaran , tambahkan i dengan 1 0->1->2->3->4

for(let i = 0; i < DAFTAR_MAHASISWA.length; i++) {
    // Daftar mahasiswa[i] -> ambil elemen pada posisi index ke 1 dari array
    // (i + 1) -> digunakan agar nomor urut yang tampil bukan dari ke 1, bukan 0
    console.log ((i + 1) + ". " + DAFTAR_MAHASISWA[i]);
}

// .length adalah property yang mengembalikan total panjang dari si array yang di dalam array
console.log("Total Mahasiswa : " + DAFTAR_MAHASISWA.length);
console.log("Praktikum Selesai War is over");



