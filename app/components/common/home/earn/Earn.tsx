import BtnPrimary from "../BtnPrimary";
import EarnItem from "./partials/EarnItem";
import StakeItem from "./partials/StakeItem";
import SwapItem from "./partials/SwapItem";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Vault } from "~/@types/common";
import { EXTERNAL_LINKS } from "~/constants/url";

const data = [
  {
    title: Vault.EARN,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.EARN,
  },
  {
    title: Vault.STAKE,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.STAKE,
  },
  {
    title: Vault.SWAP,
    description:
      "Earn attractive yields with vaults leveraging hedge fund strategies effective in all market conditions.",
    type: Vault.SWAP,
  },
];

export default function Earn() {
  const [vault, setVault] = useState<Vault>(Vault.EARN);

  const renderUI = useCallback(() => {
    switch (vault) {
      case Vault.EARN:
        return <EarnItem />;
      case Vault.STAKE:
        return <StakeItem />;
      case Vault.SWAP:
        return <SwapItem />;
      default:
        return <EarnItem />;
    }
  }, [vault]);

  const handleChangeVault = (type: Vault) => {
    if (type !== vault) {
      setVault(type);
    }
  };

  return (
    <div
      className={"px-8 lg:px-8 xl:px-48 sm:px-3 py-28 bg-white text-dark-green"}
    >
      <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6"}>
        <div className={"lg:pl-16 space-y-8 sm:mx-2"}>
          {data.map((item, index) => {
            if (item.type === vault) {
              return (
                <div key={index} className={"flex space-x-6"}>
                  <div className={"relative"}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                      className={
                        "text-2xl w-[46px] h-[46px] rounded-full bg-light-yellow flex justify-center items-center"
                      }
                    >
                      {index + 1}
                    </motion.div>
                    {index !== data.length - 1 && (
                      <div
                        className={
                          "before:absolute before:w-[1px] before:h-[80%] before:bg-gradient-line before:left-1/2 mt-[10px]"
                        }
                      ></div>
                    )}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={"space-y-4"}
                  >
                    <h1 className={"text-[40px] font-medium capitalize"}>
                      {item.title}
                    </h1>
                    <p className={"pr-4 text-xl text-sub-title-2"}>
                      {item.description}
                    </p>
                    <BtnPrimary title={"Launch App"} to={EXTERNAL_LINKS.App} />
                  </motion.div>
                </div>
              );
            }
            return (
              <div key={index} className={"flex space-x-6"}>
                <div className={"relative"}>
                  <div
                    className={
                      "text-2xl w-[46px] h-[46px] rounded-full bg-bg-grey flex justify-center items-center cursor-pointer"
                    }
                    onClick={() => handleChangeVault(item.type)}
                    onMouseEnter={() => handleChangeVault(item.type)}
                  >
                    {index + 1}
                  </div>
                  {index !== data.length - 1 && (
                    <div
                      className={
                        "before:absolute before:w-[1px] before:h-[45%] before:bg-bg-grey before:left-1/2 mt-2"
                      }
                    ></div>
                  )}
                </div>
                <div
                  className={"text-5xl cursor-pointer opacity-60 capitalize"}
                  onClick={() => handleChangeVault(item.type)}
                  onMouseEnter={() => handleChangeVault(item.type)}
                >
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {renderUI()}
        </motion.div>
      </div>
    </div>
  );
}
