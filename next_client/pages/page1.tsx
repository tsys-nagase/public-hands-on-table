import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import dynamic from "next/dynamic";
import { HyperFormula } from "hyperformula";
import React, { useRef } from "react";
// window is not definedの対策
const HotTable = dynamic(() => import("@handsontable/react"), {
  ssr: false, // <- ここで ssr を無効にするオプションを渡す
});
// const HyperFormula = dynamic(() => import("hyperformula"), {
//   ssr: false, // <- ここで ssr を無効にするオプションを渡す
// });

export default function Home() {
  if (typeof window !== "undefined") {
    if (typeof navigator !== "undefined") {
      registerAllModules();
    }
  }
  const data = [
    ["", "Tesla", "Nissan", "Toyota", "Honda", "Mazda", "Ford"],
    ["2017", 10, 11, 12, 13, 15, 16],
    ["2018", 10, 11, 12, 13, 15, 16],
    ["2019", 10, 11, 12, 13, 15, 16],
    ["2020", 10, 11, 12, 13, 15, 16],
    ["2021", 10, 11, 12, 13, 15, 16],
  ];

  return (
    <div className={styles.container}>
      <h3>テーブル</h3>
      <HotTable
        data={data}
        startRows={5}
        startCols={5}
        height="auto"
        width="auto"
        colHeaders={true}
        columns={[
          { data: 0 },
          // skip the second column
          { data: 2 },
          { data: 3 },
          { data: 4 },
          { data: 5 },
          { data: 6 },
        ]}
        formulas={{
          engine: HyperFormula,
        }}
        minSpareRows={1}
        licenseKey="non-commercial-and-evaluation"
      />
    </div>
  );
}
