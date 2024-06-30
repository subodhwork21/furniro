const Container = ({
  pt,
  pl,
  pr,
  pb,
  pos = "static",
  children,
}: {
  pt: string;
  pl: string;
  pr: string;
  pb: string;
  pos?: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className={`max-w-[1440px] w-full mx-auto ${pt} ${pl} ${pr} ${pb} ${pos}`}
    >
      {children}
    </section>
  );
};

export default Container;
