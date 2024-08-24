import Balance from "@/components/balance";
import Button from "@/components/buttons";
import IconButtons from "@/components/iconButtons";
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

      <section
        id="mid-container"
        className="bg-bgMidd py-4 rounded-t-3xl border-t-bgCoin border-t-4 bg-gradient-to-b from-bgMidd to-bgMain"
      >
        <section id="top-buttons" className="flex justify-evenly items-center">
          <Button title="Daily Login" path="/daily-login" img="/gift.svg" />
          <Button title="Combo" path="/combo" img="/combo.svg" />
          <Button title="Daily Word" path="/daily-word" img="/daily_word.svg" />
          <Button title="Roullete" path="/roullete" img="/roullete.svg" />
        </section>

        <section id="currency-container" className="flex justify-center">
          <div id="currency">
            <div className="text-2xl md:text-4xl font-normal pt-12 flex justify-center">
              0.0034249
            </div>
            <div className="relative">
              <Image
                className="p-8 w-full"
                src="/big_coin.svg"
                alt="Big Coin"
                width={0}
                height={0}
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-400 to-blue-200 blur-lg opacity-30 "></div>
            </div>
          </div>
        </section>

        <section
          id="main-action-button"
          className="w-full flex justify-center mt-8 px-4"
        >
          <button className="fill text-xl font-medium w-full lg:w-1/3 rounded-lg h-14 bg-bgButton border-b-2 border-blue-700 ">
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
          className="bg-bgBtNav h-auto lg:w-1/3 w-full rounded-lg p-2"
        >
          <IconButtons />
        </section>
      </section>
    </main>
  );
}
