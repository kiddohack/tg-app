import Image from "next/image";
import Link from "next/link";

type ButtonComponents = {
  path: string;
  title: string;
  img: string;
};

export default function Button({ path, title, img }: ButtonComponents) {
  return (
    <main className="relative">
      <div className="absolute top-0 w-20 left-1 h-full bg-gradient-to-t from-white/10 to-transparent lg:rounded-3xl rounded-xl filter blur-sm"></div>

      <section className="lg:rounded-3xl rounded-xl mx-1 lg:mx-10 p-0 relative border-b-2 border-gray-600 w-20 h-28">
        <div className="flex justify-center items-center h-full">
          <Link
            href={path}
            className="md:m-10 text-xs lg:text-xl flex-col justify-center items-center w-full"
          >
            <Image
              className="mb-2 ml-4 w-12 md:w-full h-full"
              src={img}
              alt={`${title} button image`}
              height={0}
              width={0}
            />
            <p className="flex justify-center md:text-xl text-xs md:font-bold font-semibold">
              {title}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
