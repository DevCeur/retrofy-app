type SignFormWrapperProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export const SingFormWrapper = ({
  title,
  summary,
  children,
}: SignFormWrapperProps) => {
  return (
    <div className="w-full bg-white px-8 py-10 flex-col space-y-8 shadow-2xl shadow-black/5">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <p className="text-sm text-neutral-600">{summary}</p>
      </div>

      {children}
    </div>
  );
};
