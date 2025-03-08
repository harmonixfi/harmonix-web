import BtnPrimary from "./BtnPrimary";
import { motion } from "framer-motion";
import { VerichainIcon } from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

export default function AuditSection2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={"lg:px-60 py-[120px] bg-white text-primary space-y-16  px-8"}
    >
      <div
        className={
          "py-[46px] space-y-6 text-center bg-light-yellow rounded-3xl flex flex-col items-center"
        }
      >
        <p className={"font-medium text-[64px]"}>Audit</p>
        <p className={"font-normal text-2xl"}>
          Ensuring the security of Harmonix is our top priority. Discover more
          in our security reports.
        </p>
        <div>
          <VerichainIcon className={"w-64 h-24"} />
        </div>
        <BtnPrimary to={EXTERNAL_LINKS.Audit} title={"See Full Report"} />
      </div>
    </motion.div>
  );
}
