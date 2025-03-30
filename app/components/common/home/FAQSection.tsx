import BtnPrimary from "./BtnPrimary";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MinusIcon, PlusFaqsIcon, PlusIcon } from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

const data = [
  {
    title: "What is Harmonix Finance?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "What are the core values of Harmonix Finance?",
    description: (
      <ul>
        <li>Building what we understand deeply and love the most</li>
        <li>Sustainability in everything</li>
        <li>Humble and honest</li>
        <li>Risk control is everything</li>
      </ul>
    ),
  },
  {
    title: "What sets Harmonix apart from other DeFi platforms?",
    description:
      "Harmonix stands out due to its innovative strategies inspired by traditional finance (such as delta neutral and option wheels) and adapted for DeFi. With a strong emphasis on transparency and security, Harmonix reiterates its commitment to community engagement and continuous improvement.",
  },
  {
    title: "How does Harmonix benefit investors?",
    description:
      "Harmonix benefits investors by automating complex trading strategies, balancing risk and reward, providing real-time performance metrics, and promoting transparency and security within the DeFi landscape.",
  },
  {
    title: "How can I start using Harmonix?",
    description:
      "To start using Harmonix, visit our platform, connect your wallet, explore the available vaults, select the one that suits your investment goals, and deposit your assets to start earning yields. Video Tutorial: https://youtu.be/AT6tHoM0hh4?feature=shared Website: https://app.harmonix.fi/",
  },
  {
    title: "What are the main vault strategies offered by Harmonix Finance?",
    description: (
      <ul>
        <li>
          Option Wheel Vault: Earns liquidity farming and option premium fees,
          capturing the upside of ETH and generating competitive APR.
        </li>
        <li>
          Delta Neutral Vault: Earns yield through short funding fees on Perp
          Dexes and staked ETH, plus borrow APY on Radiant Capital.
        </li>
        <li>
          Delta Neutral Restaking Vault: Earns yield through funding fees on
          Perp Dexes and deposited ETH into the Liquid restaking ecosystem to
          earn airdrop points.
        </li>
        <li>
          Pendle Hedging Vault: Utilizes Pt ETH from Pendle to create a hedge
          option for Pendle's Pt ETH holders against drawdown, while earning the
          same APY from Pendle and incentives from Harmonix.
        </li>
      </ul>
    ),
  },
  {
    title: "What is the Option Wheel Vault? How does it work?",
    description:
      "The Option Wheel Vault optimizes profit generation in bullish markets and mitigates risk in bearish markets through covered calls/puts options. The vault also generates additional yield via liquidity farming protocol incentives The vault earns yield through liquidity farming and option premium fees, capturing the upside of ETH and generating 10%-20% APR.",
  },
  {
    title: "What is the Delta Neutral Vault? How does it work?",
    description:
      "The Delta Neutral Vault maintains equivalent long and short positions, achieving delta neutrality and capitalizing on yield opportunities while mitigating risk. The strategy involves shorting ETH on perp markets with favorable funding rates while holding ETH in spot positions to remain delta neutral against USD.",
  },
  {
    title: "Has Harmonix launched tokens yet?",
    description:
      "No, we haven't. Join our Discord and follow our X to receive the latest updates. Our official links: https://link3.to/harmonix_finance",
  },
];

export default function FAQSection() {
  return (
    <div
      className={
        "px-8 py-8 2xl:px-60 xl:px-60 xl:py-32 2xl:py-32 bg-white text-primary space-y-16"
      }
    >
      <div
        className={
          "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6"
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={"space-y-6"}
        >
          <p className={"text-[64px] font-medium font-outfit"}>FAQs</p>
          <p className={"text-2xl font-normal"}>
            Don't see the answer you're looking for?
          </p>
          <BtnPrimary to={EXTERNAL_LINKS.App} title={"Get in touch"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion
            selectionMode={"multiple"}
            itemClasses={{
              base: "bg-[#edf9f24d] px-4 py-1 text-primary rounded-3xl border border-solid border-[#F1F1EB]",
            }}
            showDivider={false}
            className={"space-y-3"}
          >
            {data.map((item, index) => {
              return (
                <AccordionItem
                  key={index}
                  aria-label={"What is Harmonix Finance?"}
                  title={
                    <p className={"text-lg text-dark-green"}>{item.title}</p>
                  }
                  indicator={({ isOpen }) =>
                    isOpen ? (
                      <MinusIcon
                        className={"w-4 h-4 lg:w-6 lg:h-6 rotate-90"}
                      />
                    ) : (
                      <PlusFaqsIcon className={"w-4 h-4 lg:w-6 lg:h-6"} />
                    )
                  }
                >
                  <p className={"text-sub-title text-lg font-lato"}>
                    {item.description}
                  </p>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
