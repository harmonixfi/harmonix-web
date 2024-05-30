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
        cert: 'arn:aws:acm:us-east-1:211125391360:certificate/8b4ee01b-e0e5-4f10-a8e5-70e2086231c7',
      },
    });
  },
});
