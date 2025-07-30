import TermOfServicesContent from "~/components/common/TermOfServicesContent";

const metaTitle = "Harmonix | Terms of Use";

export const meta: MetaFunction = () => {
  return [{ title: metaTitle }];
};

export default function Terms() {
  return <TermOfServicesContent />;
}
