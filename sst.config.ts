/// <reference path="./.sst/platform/config.d.ts" />
// import { CdnDomainArgs } from './.sst/platform/src/components/aws/cdn';

export default $config({
  app(input) {
    return {
      name: 'rock-onyx-ui',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('HarmonixWeb', {
      domain: {
        name: 'harmonix.fi',
        dns: false,
        cert: 'arn:aws:acm:us-east-1:471112945627:certificate/95c442c2-b056-40a4-8d99-20ba5a0e5664',
      },
    });
  },
});
