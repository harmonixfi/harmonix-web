import BtnPrimary from "./BtnPrimary";
import { motion } from "framer-motion";
import { ShieldifyIcon, VerichainIcon } from "~/components/icons";
import { EXTERNAL_LINKS } from "~/constants/url";

export default function AuditSection2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="px-8 lg:px-8 xl:px-60 2xl:px-60 py-[120px] bg-white text-dark-green space-y-16"
      id="audit-section"
    >
      <div
        className="py-8 xl:py-12 2xl:py-12 px-9 space-y-6 text-center rounded-3xl flex flex-col items-center"
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
        <p className="font-medium text-4xl lg:text-5xl">Audit</p>
        <p className="font-normal text-lg sm:text-xl xl:w-2/3 2xl:w-1/2">
          Ensuring the security of Harmonix is our top priority. Discover more
          in our security reports.
        </p>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row md:justify-around lg:justify-around justify-between items-center w-full space-y-6">
          <div className="space-y-2">
            <VerichainIcon className="w-auto h-16 sm:h-20 md:h-24" />
            <BtnPrimary
              to={EXTERNAL_LINKS.VerichainAuditReport}
              title="See Full Report"
            />
          </div>
          <div className="space-y-2">
            <ShieldifyIcon className="w-60 lg:w-80 xl:w-80 2xl:w-80" />
            <BtnPrimary
              to={EXTERNAL_LINKS.ShieldifyAuditReport}
              title="See Full Report"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
