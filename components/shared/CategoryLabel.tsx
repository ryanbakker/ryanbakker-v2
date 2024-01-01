function CategoryLabel({ category }: { category: string }) {
  return (
    <p
      className={`w-fit py-0.5 px-4 rounded-md font-medium
      ${category === "Next.js 13" && "bg-stone-500/40 text-stone-300"}
      ${category === "Next.js 14" && "bg-slate-500/40 text-slate-300"}
      ${category === "MERN" && "bg-green-500/40 text-green-400"}
      ${category === "React Native" && "bg-sky-500/40 text-sky-400"}
      ${category === "React Native Expo" && "bg-sky-500/40 text-sky-400"}
      ${category === "WordPress" && "bg-cyan-500/40 text-cyan-400"}
      ${category === "HTML" && "bg-red-500/40 text-red-400"}
      ${category === "Vite.js" && "bg-fuchsia-500/40 text-fuchsia-400"}
      `}
    >
      {category}
    </p>
  );
}

export default CategoryLabel;
