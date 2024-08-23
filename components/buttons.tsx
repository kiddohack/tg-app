import Image from "next/image";
import Link from "next/link";

type ButtonComponents = {
  path: string;
  title: string;
  img: string;
};

export default function Button({ path, title, img }: ButtonComponents) {
  return (
    <section className="lg:rounded-3xl rounded-xl mx-1 lg:mx-2 p-0 flex border-b-2 border-b-gray-700">
      <Link
        href={path}
        className="md:m-10 text-xs lg:text-xl flex-col justify-center "
      >
        <Image
          className="m-0 mb-2 w-16 md:w-full h-full"
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
