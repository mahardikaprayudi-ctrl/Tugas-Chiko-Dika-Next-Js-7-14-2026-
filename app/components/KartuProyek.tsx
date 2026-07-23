type KartuProyekProps = {
  judul: string;
  deskripsi: string;
  teknologi?: string[];
};

export default function KartuProyek({ judul, deskripsi, teknologi }: KartuProyekProps) {
  return (
    <div className="border border-gray-800 bg-gray-900 rounded-xl p-5 mb-4">
      <h3 className="text-xl font-semibold text-white mb-2">{judul}</h3>
      <p className="text-gray-400 mb-3">{deskripsi}</p>

      {teknologi && (
        <div className="flex flex-wrap gap-2">
          {teknologi.map((tech) => (
            <span
              key={tech}
              className="bg-gray-800 text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}