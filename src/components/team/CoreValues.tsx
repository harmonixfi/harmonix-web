import { DocumentTextIcon } from '@heroicons/react/24/outline';

const content = [
  {
    title: '01. Expertise and Passion',
    description: 'We build what we understand deeply, love the most, and can excel at.',
  },
  {
    title: '02. Sustainability',
    description:
      'Given the volatile nature of the crypto market, we aim to develop a business model that offers long-term, sustainable yields.',
  },
  {
    title: '03. Relevance',
    description:
      'Our solutions are designed to remain relevant and appealing across at least two market cycles, ensuring they meet the needs of our users consistently.',
  },
  {
    title: '04. Risk Awareness',
    description:
      'Risk management is central to everything we do, ensuring that all investments are secure and reliable.',
  },
];

const CoreValues = () => {
  return (
    <div className="rounded-3xl bg-[#DFEAFF] p-16">
      <span className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
        <DocumentTextIcon className="w-6 h-6 text-white" />
      </span>
      <h3 className="text-primary text-4xl font-medium capitalize mt-6">Our core values</h3>
      <ul className="flex gap-12 mt-16">
        {content.map((x) => (
          <li key={x.title} className="flex-1 bg-white rounded-3xl p-6 space-y-4 text-primary">
            <p className="text-lg font-semibold">{x.title}</p>
            <p className="text-lg font-light">{x.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoreValues;
