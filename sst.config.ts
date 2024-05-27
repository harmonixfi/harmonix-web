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
    new sst.aws.Nextjs('HarmonixWeb');
  },
});
