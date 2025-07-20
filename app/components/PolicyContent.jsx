export default function PolicyContent({ title, content }) {
  return (
    <section className="mb-6 text-left">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
        {content.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}