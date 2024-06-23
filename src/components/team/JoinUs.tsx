import JoinUsButton from './JoinUsButton';

const JoinUs = () => {
  return (
    <div
      className="flex flex-col items-center gap-8 rounded-3xl pb-36"
      style={{ background: 'linear-gradient(180deg, rgba(218, 244, 236, 0.00) 0%, #DAF4EC 100%)' }}
    >
      <h3 className="text-primary text-6xl font-medium text-center">Join us. Be you.</h3>
      <p className="w-1/2 text-primary opacity-80 text-center">
        We are always looking for talented individuals who are passionate about DeFi and eager to
        make a difference in the world of finance. If you share our vision and values, we would love
        to hear from you.
      </p>
      <JoinUsButton />
    </div>
  );
};

export default JoinUs;
