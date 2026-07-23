import Link from "next/link";
import KartuProyek from "../components/KartuProyek";

export default function PortoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Kembali ke Beranda
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-2">Portofolio</h1>
        <p className="text-gray-400 mb-8">Beberapa proyek yang pernah saya kerjakan</p>

        <div>
          <KartuProyek
            judul="Website Pallucela"
            deskripsi="Website UMKM makanan tradisional dari Bone, dibuat dengan Next.js dan Tailwind CSS."
            teknologi={["Next.js", "Tailwind CSS", "TypeScript"]}
          />
          <KartuProyek
            judul="Buku Kas Keluarga"
            deskripsi="Aplikasi pencatatan keuangan keluarga berbasis Flutter."
            teknologi={["Flutter", "Dart"]}
          />
          <KartuProyek
            judul="Portofolio Pribadi"
            deskripsi="Website portofolio ini sendiri, dibuat sambil belajar Next.js App Router."
            teknologi={["Next.js", "React"]}
          />
        </div>
      </div>
    </main>
  );
}