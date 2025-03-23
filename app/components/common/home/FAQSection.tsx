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
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "What sets Harmonix apart from other DeFi platforms?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "How does Harmonix benefit investors?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "How can I start using Harmonix?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "What are the main vault strategies offered by Harmonix Finance?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "What is the Option Wheel Vault? How does it work?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "What is the Delta Neutral Vault? How does it work?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
  {
    title: "Has Harmonix launched tokens yet?",
    description:
      "Harmonix Finance is a DeFi platform that transforms sophisticated hedge fund strategies into accessible and easy-to-use automated vaults, allowing users to optimize returns through various curated investment strategies.",
  },
];

export default function FAQSection() {
  return (
    <div
      className={"lg:px-60 py-[120px] bg-white text-primary space-y-16  px-8"}
    >
      <div
        className={
          "flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0"
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={"lg:w-1/2 space-y-6"}
        >
          <p className={"text-[64px] font-medium"}>FAQs</p>
          <p className={"text-2xl font-normal"}>
            Don't see the answer you're looking for?
          </p>
          <BtnPrimary to={EXTERNAL_LINKS.App} title={"Get in touch"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={"lg:w-1/2"}
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
                    <p className={"text-lg text-dark-green"}>
                      {item.title}
                    </p>
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
                  <p className={"text-sub-title text-lg"}>
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
