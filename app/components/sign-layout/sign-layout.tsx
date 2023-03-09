type SignLayoutProps = {
  children: React.ReactNode;
};

export const SignLayout = ({ children }: SignLayoutProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <main className="w-full max-w-md">{children}</main>
    </div>
  );
};
