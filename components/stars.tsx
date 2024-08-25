type StarComponents = {
  top: string;
  left: string;
  bottom: string;
  right: string;
};

export default function Star({ top, left, bottom, right }: StarComponents) {
  return (
    <div
      className={`absolute w-2 h-2 rounded-full bg-white border-[3px] border-blue-400 blur-[2px] ${top} ${left} ${bottom} ${right}`}
    ></div>
  );
}
