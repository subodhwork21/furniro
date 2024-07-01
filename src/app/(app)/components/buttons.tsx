const Button1 = ({
  width,
  height,
  bg,
  text,
  name,
}: {
  width: string;
  height: string;
  bg: string;
  text: string;
  name: string;
}) => {
  return (
    <button
      className={`uppercase ${width} ${bg} ${text} ${height} bg-primary text-white font-poppinsbold`}
    >
      {name}
    </button>
  );
};

const Button2 = ({
  width,
  height,
  bg,
  text,
  name,
}: {
  width: string;
  height: string;
  bg: string;
  text: string;
  name: string;
}) => {
  return (
    <button
      className={` ${width} ${bg} ${text}  ${height} z-[100] opacity-100 hover:bg-primary hover:transition-all hover:duration-500 text-primary hover:text-white font-poppinssemibold`}
    >
      {name}
    </button>
  );
};

export { Button1, Button2 };
