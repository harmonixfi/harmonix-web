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
      className={
        "px-8 lg:px-8 xl:px-60 2xl:px-60 py-[120px] bg-white text-dark-green space-y-16"
      }
    >
      <div
        className={
          "py-[46px] space-y-6 text-center rounded-3xl flex flex-col items-center"
        }
        style={{
          backgroundImage: `
            linear-gradient(300deg, rgba(241, 240, 235, 0) 7.75%, rgba(226, 246, 161, 0.5) 92.25%),
            url('bg.png')
          `,
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
          backgroundBlendMode: "color, normal",
        }}
      >
        <p className={"font-medium text-[32px] lg:text-[64px]"}>Audit</p>
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
