function Title() {
  return (
    <h1 className="text-6xl font-medium uppercase leading-[5rem]">
      Hi I'm Ryan, <br /> A{" "}
      <span className="relative font-bold px-3 rounded-md title-accent z-10 ml-2">
        Web Developer
        <div className="bg-indigo-700/20 absolute left-0 top-0 h-full w-full -z-10 rounded-md" />
      </span>
    </h1>
  );
}

export default Title;
