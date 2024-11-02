import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full sm:w-5/6 lg:w-2/3 xl:w-1/2 mx-auto">
      <h3 className="text-primary text-6xl font-medium text-center capitalize">
        FAQ
      </h3>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="What is Harmonix Finance?"
          title="What is Harmonix Finance?"
        >
          Harmonix Finance is a DeFi platform that transforms sophisticated
          hedge fund strategies into accessible and easy-to-use automated
          vaults, allowing users to optimize returns through various curated
          investment strategies.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="What are the core values of Harmonix Finance?"
          title="What are the core values of Harmonix Finance?"
        >
          <ul>
            <li>Building what we understand deeply and love the most</li>
            <li>Sustainability in everything</li>
            <li>Humble and honest</li>
            <li>Risk control is everything</li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="What sets Harmonix apart from other DeFi platforms?"
          title="What sets Harmonix apart from other DeFi platforms?"
        >
          Harmonix stands out due to its innovative strategies inspired by
          traditional finance (such as delta neutral and option wheels) and
          adapted for DeFi. With a strong emphasis on transparency and security,
          Harmonix reiterates its commitment to community engagement and
          continuous improvement.
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="How does Harmonix benefit investors?"
          title="How does Harmonix benefit investors?"
        >
          Harmonix benefits investors by automating complex trading strategies,
          balancing risk and reward, providing real-time performance metrics,
          and promoting transparency and security within the DeFi landscape.
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="How can I start using Harmonix?"
          title="How can I start using Harmonix?"
        >
          To start using Harmonix, visit our platform, connect your wallet,
          explore the available vaults, select the one that suits your
          investment goals, and deposit your assets to start earning yields.
          Video Tutorial: https://youtu.be/AT6tHoM0hh4?feature=shared Website:
          https://app.harmonix.fi/
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="What are the main vault strategies offered by Harmonix Finance?"
          title="What are the main vault strategies offered by Harmonix Finance?"
        >
          <ul>
            <li>
              Option Wheel Vault: Earns liquidity farming and option premium
              fees, capturing the upside of ETH and generating competitive APR.
            </li>
            <li>
              Delta Neutral Vault: Earns yield through short funding fees on
              Perp Dexes and staked ETH, plus borrow APY on Radiant Capital.
            </li>
            <li>
              Delta Neutral Restaking Vault: Earns yield through funding fees on
              Perp Dexes and deposited ETH into the Liquid restaking ecosystem
              to earn airdrop points.
            </li>
            <li>
              Pendle Hedging Vault: Utilizes Pt ETH from Pendle to create a
              hedge option for Pendle's Pt ETH holders against drawdown, while
              earning the same APY from Pendle and incentives from Harmonix.
            </li>
          </ul>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="What is the Option Wheel Vault? How does it work?"
          title="What is the Option Wheel Vault? How does it work?"
        >
          The Option Wheel Vault optimizes profit generation in bullish markets
          and mitigates risk in bearish markets through covered calls/puts
          options. The vault also generates additional yield via liquidity
          farming protocol incentives The vault earns yield through liquidity
          farming and option premium fees, capturing the upside of ETH and
          generating 10%-20% APR.
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="What is the Delta Neutral Vault? How does it work?"
          title="What is the Delta Neutral Vault? How does it work?"
        >
          The Delta Neutral Vault maintains equivalent long and short positions,
          achieving delta neutrality and capitalizing on yield opportunities
          while mitigating risk. The strategy involves shorting ETH on perp
          markets with favorable funding rates while holding ETH in spot
          positions to remain delta neutral against USD.
        </AccordionItem>
        <AccordionItem
          key="9"
          aria-label="Has Harmonix launched tokens yet?"
          title="Has Harmonix launched tokens yet?"
        >
          No, we haven't. Join our Discord and follow our X to receive the
          latest updates. Our official links: https://link3.to/harmonix_finance
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
