const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-slate-800">
      {children}
    </main>
  );
};

export default Layout;
