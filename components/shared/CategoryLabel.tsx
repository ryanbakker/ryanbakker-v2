function CategoryLabel({ category }: { category: string }) {
  return (
    <p
      className={`w-fit py-1 px-4 rounded-md font-medium
      ${category === "Next.js 13" && "bg-slate-500/40 text-slate-300"}
      ${category === "Next.js 14" && "bg-slate-500/40 text-slate-300"}
      ${category === "MERN" && "bg-[#4DB33D]/40 text-[#4DB33D]"}
      ${category === "React Native" && "bg-[#61dbfb]/40 text-[#61dbfb]"}
      ${category === "React Native Expo" && "bg-[#61dbfb]/40 text-[#61dbfb]"}
      ${category === "WordPress" && "bg-[#41a2cf]/40 text-[#44b5e9]"}
      ${category === "HTML" && "bg-[#E34C26]/40 text-[#E34C26]"}
      `}
    >
      {category}
    </p>
  );
}

export default CategoryLabel;
