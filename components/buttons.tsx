import Image from "next/image";
import Link from "next/link";

type ButtonComponents = {
  path: string;
  title: string;
  img: string;
};

export default function Button({ path, title, img }: ButtonComponents) {
  return (
    <section className="rounded-lg mx-1 lg:mx-2 p-0 flex">
      <Link
        href={path}
        className="md:m-10 text-xs lg:text-xl flex-col justify-center backdrop-blur-xl"
      >
        <Image
          className="m-0 p-0 w-16 md:w-full h-full"
          src={img}
          alt={`${title} button image`}
          height={0}
          width={0}
        />
        <p className="flex justify-center md:text-xl text-xs font-bold">
          {title}
        </p>
      </Link>
    </section>
  );
}
