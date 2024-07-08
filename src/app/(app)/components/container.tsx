const Container = ({
  pt,
  pl,
  pr,
  pb,
  pos = "static",
  bgcolor = "bg-white",
  children,
}: {
  pt: string;
  pl: string;
  pr: string;
  pb: string;
  pos?: string;
  bgcolor?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`max-w-[1440px] ${bgcolor} w-full mx-auto ${pt} ${pl} ${pr} ${pb} ${pos}`}
    >
      {children}
    </section>
  );
};

export default Container;
