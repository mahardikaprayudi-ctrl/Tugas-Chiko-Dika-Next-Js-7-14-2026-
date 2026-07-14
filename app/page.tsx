import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <span className="font-bold text-lg">DIKA CHIKO</span>
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/profil" className="hover:text-white">Profil</Link>
          <Link href="/porto" className="hover:text-white">Portofolio</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Halo, saya <span className="text-blue-500">Dika Chiko</span>
        </h1>
        <p className="text-gray-400 max-w-xl mb-8">
          Siswa Kelas 12 yang sedang belajar Web Development dengan Next.js & React.
        </p>
      </section>
    </main>
  );
}