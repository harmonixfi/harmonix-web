import BtnPrimary from "./BtnPrimary";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { MinusIcon, PlusFaqsIcon, PlusIcon } from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

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
          className={"lg:w-2/5 space-y-6"}
        >
          <p className={"text-[64px] font-medium"}>FAQs</p>
          <p className={"text-base font-normal"}>
            Don't see the answer you're looking for?
          </p>
          <BtnPrimary to={EXTERNAL_LINKS.App} title={"Get in touch"} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={"lg:w-3/5"}
        >
          <Accordion
            selectionMode={"multiple"}
            itemClasses={{
              base: "bg-bg-grey px-4 py-3 lg:px-8 lg:py-6 text-primary rounded-3xl border border-solid border-[#E8EDEC]",
            }}
            showDivider={false}
            className={"space-y-3"}
          >
            <AccordionItem
              key={"1"}
              aria-label={"What is Harmonix Finance?"}
              title={
                <p className={"text-lg lg:text-2xl text-dark-green"}>
                  What is Harmonix Finance?
                </p>
              }
              indicator={({ isOpen }) =>
                isOpen ? (
                  <MinusIcon className={"w-4 h-4 lg:w-6 lg:h-6 rotate-90"} />
                ) : (
                  <PlusFaqsIcon className={"w-4 h-4 lg:w-6 lg:h-6"} />
                )
              }
            >
              <p className={"text-sub-title text-lg"}>
                Harmonix Finance is a DeFi platform that transforms
                sophisticated hedge fund strategies into accessible and
                easy-to-use automated vaults, allowing users to optimize returns
                through various curated investment strategies.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="What are the core values of Harmonix Finance?"
              title={
                <p className={"text-lg lg:text-2xl text-dark-green"}>
                  What are the core values of Harmonix Finance?
                </p>
              }
              indicator={({ isOpen }) =>
                isOpen ? (
                  <MinusIcon className={"w-4 h-4 lg:w-6 lg:h-6 rotate-90"} />
                ) : (
                  <PlusFaqsIcon className={"w-4 h-4 lg:w-6 lg:h-6"} />
                )
              }
            >
              <ul className={"text-sub-title text-lg"}>
                <li>Building what we understand deeply and love the most</li>
                <li>Sustainability in everything</li>
                <li>Humble and honest</li>
                <li>Risk control is everything</li>
              </ul>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
