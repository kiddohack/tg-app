import Balance from "@/components/balance";
import Button from "@/components/buttons";
import IconButtons from "@/components/iconButtons";
import User from "@/components/user";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-dvh m-3 md:m-10 ">
      <nav id="topbar" className="flex justify-between lg:justify-evenly">
        <User />
        <Balance />
      </nav>

      <section
        id="top-buttons"
        className="mt-5 flex lg:justify-center justify-evenly"
      >
        <Button title="Daily Login" path="/daily-login" img="/gift.svg" />
        <Button title="Combo" path="/combo" img="/combo.svg" />
        <Button title="Daily Word" path="/daily-word" img="/daily_word.svg" />
        <Button title="Roullete" path="/roullete" img="/roullete.svg" />
      </section>

      <section id="currency-container" className="flex justify-center">
        <div id="currency">
          <div className="text-2xl md:text-4xl font-bold pt-12 flex justify-center">
            0.0034249
          </div>
          <div className="relative">
            <Image
              className="p-4 w-36 md:w-full"
              src="/big_coin.svg"
              alt="Big Coin"
              width={0}
              height={0}
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400 to-blue-200 blur-lg opacity-30"></div>
          </div>
        </div>
      </section>

      <section
        id="main-action-button"
        className="w-full flex justify-center mt-8"
      >
        <button className="fill text-xl font-medium w-full lg:w-1/3 rounded-lg h-14 bg-bgButton shadow-lg shadow-black/40">
          {" "}
          Claim <span className="font-bold">948 coins</span>
        </button>
      </section>

      <section
        id="bottom-navbar.container"
        className="flex justify-center my-10"
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
