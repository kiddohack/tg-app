import Image from "next/image";

export default function User() {
  return (
    <section className="flex items-center p-2 w-36 md:w-auto">
      <Image
        className="sm:mr-4 mr-2"
        src="/Ellipse_38.svg"
        alt="Picture of the user"
        width={65}
        height={80}
      />
      <div className="md:text-xl text-xs font-bold">Amg_Booster</div>
    </section>
  );
}
