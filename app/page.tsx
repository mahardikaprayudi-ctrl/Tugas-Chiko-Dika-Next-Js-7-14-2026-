export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO saja, navbar sudah dari layout */}
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