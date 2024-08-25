import Balance from "@/components/balance";
import Button from "@/components/buttons";
import IconButtons from "@/components/iconButtons";
import Star from "@/components/stars";
import User from "@/components/user";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-dvh p-0">
      <nav
        id="topbar"
        className="flex justify-between lg:justify-evenly pt-2 px-2"
      >
        <User />
        <Balance />
      </nav>

      <div className="relative">
        <div className="absolute w-full h-12 -top-2 bg-topShadow rounded-xl -z-10 filter blur-md"></div>
      </div>

      <section
        id="mid-container"
        className="relative pt-4 rounded-t-3xl border-t-bgCoin border-t-4 bg-bgMidd mt-4"
      >
        <section
          id="top-buttons"
          className="flex justify-evenly lg:justify-center items-center"
        >
          <Button title="Daily Login" path="/daily-login" img="/gift.svg" />
          <Button title="Combo" path="/combo" img="/combo.svg" />
          <Button title="Daily Word" path="/daily-word" img="/daily_word.svg" />
          <Button title="Roullete" path="/roullete" img="/roullete.svg" />
        </section>

        <Star top="" left="left-14" bottom="" right="" />
        <Star top="top-32" left="left-56" bottom="" right="" />

        <section id="currency-container" className="flex justify-center">
          <div id="currency">
            <div className="text-2xl md:text-4xl font-medium pt-8 flex justify-center">
              0.0034249
            </div>
            <div className="relative w-full">
              <Image
                className="p-8 w-full"
                src="/big_coin.svg"
                alt="Big Coin"
                width={0}
                height={0}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-blue-400 blur-xl opacity-30 left"></div>
            </div>
          </div>
        </section>

        <Star top="top-48" left="left-80" bottom="" right="" />
        <Star top="" left="left-80" bottom="bottom-20" right="" />
        <Star top="" left="left-12" bottom="bottom-32" right="" />
        <Star top="top-40" left="left-2" bottom="" right="" />
        <Star top="top-48" left="left-32" bottom="" right="" />

        <section
          id="main-action-button"
          className="w-full flex justify-center mt-4 pb-2 px-4 bg-gradient-to-b from-bgMidd to-bgMain"
        >
          <button className="fill text-xl font-medium w-full lg:w-1/3 rounded-xl h-14 bg-bgButton border-b-2 border-blue-700">
            {" "}
            Claim <span className="font-bold">948 coins</span>
          </button>
        </section>
      </section>

      <section
        id="bottom-navbar.container"
        className="flex justify-center px-4"
      >
        <section
          id="bottom-navbar"
          className="bg-bgBtNav h-auto lg:w-1/3 w-full rounded-xl p-2"
        >
          <IconButtons />
        </section>
      </section>
    </main>
  );
}
