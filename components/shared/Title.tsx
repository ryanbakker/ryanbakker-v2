function Title() {
  return (
    <h1 className="text-[2.1rem] sm:text-5xl lg:text-5xl xl:text-6xl leading-[3rem] sm:leading-[4rem] lg:leading-[4rem] xl:leading-[5rem] font-medium uppercase">
      Hi I'm Ryan, <br /> A{" "}
      <span className="relative font-bold px-3 rounded-md title-accent z-10 m-1 lg:ml-2">
        Web Developer
        <div className="bg-indigo-700/20 absolute left-0 top-0 h-full w-full -z-10 rounded-md" />
      </span>
    </h1>
  );
}

export default Title;
