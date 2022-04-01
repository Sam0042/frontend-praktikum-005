import { useState } from "react";
import Hello from "./Hello";
import data from "./utils/constants/data";

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {

  return (
    <main>
      {/**
       * Mengirim props ke component Hello.
       * nama props: name
       */}
      <Hello name="Aufa" />
      <Hello name="Mikel" />
      <Hello name="Hannah" />
      <Hello name="Jonas" />
      <Hello name="Martha" />
    </main>
  );
}

export default Main;
