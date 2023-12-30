function CategoryLabel({ category }: { category: string }) {
  return (
    <p
      className={`w-fit py-1 px-4 rounded-md font-medium
      ${category === "Next.js 13" && "bg-slate-500/40 text-slate-300"}
      ${category === "Next.js 14" && "bg-slate-500/40 text-slate-300"}
      ${category === "MERN" && "bg-green-500/40 text-green-400"}
      ${category === "React Native" && "bg-sky-500/40 text-sky-400"}
      ${category === "React Native Expo" && "bg-sky-500/40 text-sky-400"}
      ${category === "WordPress" && "bg-cyan-500/40 text-cyan-400"}
      ${category === "HTML" && "bg-red-500/40 text-red-400"}
      `}
    >
      {category}
    </p>
  );
}

export default CategoryLabel;
