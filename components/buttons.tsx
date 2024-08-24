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
      <div className="absolute top-0 w-20 lg:w-40 left-1 lg:left-10 h-full bg-gradient-to-t from-white/15 to-transparent lg:rounded-3xl rounded-xl filter blur-sm"></div>

      <section className="lg:rounded-3xl rounded-xl mx-1 lg:mx-10 p-0 relative border-b-2 border-gray-600 w-20 lg:w-40 h-28 ">
        <div className="flex justify-center items-center h-full ">
          <Link
            href={path}
            className="flex-col justify-center items-center w-full"
          >
            <Image
              className="mb-2 ml-4 lg:ml-12 w-12 lg:w-16 h-full"
              src={img}
              alt={`${title} button image`}
              height={0}
              width={0}
            />
            <p className="flex justify-center lg:text-lg text-xs lg:font-bold font-medium ">
              {title}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
