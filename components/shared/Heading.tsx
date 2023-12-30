function Heading({ title }: { title: string }) {
  return (
    <div className="relative">
      <span className="absolute bottom-0 text-6xl opacity-5 font-bold uppercase text-gray-700 dark:opacity-15">
        {title}
      </span>
      <h3 className="text-4xl font-semibold uppercase text-indigo-500">
        {title}
      </h3>
    </div>
  );
}

export default Heading;
