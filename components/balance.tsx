import Image from "next/image";

export default function Balance() {
  return (
    <section className="flex items-center p-2 w-24 md:w-auto">
      <div className="rounded-full p-2.5 sm:p-4 bg-bgCoin md:mr-4 mr-2">
        <Image src="/coin_icon.svg" alt="Balance Icon" height={30} width={30} />
      </div>
      <div className="md:text-xl text-xs font-bold">1,394</div>
    </section>
  );
}
