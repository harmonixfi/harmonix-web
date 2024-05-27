/// <reference path="./.sst/platform/config.d.ts" />
import { CdnDomainArgs } from './.sst/platform/src/components/aws/cdn';

export default $config({
  app(input) {
    return {
      name: 'rock-onyx-ui',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    const stage = $app.stage;

    const domain: CdnDomainArgs =
      stage === 'dev'
        ? {
            name: 'devsite.harmonix.fi',
            dns: false,
            cert: 'arn:aws:acm:us-east-1:211125391360:certificate/cf058081-8d3e-469b-9cf1-ae1ce52e1107',
          }
        : {
            name: 'testsite.harmonix.fi',
            dns: false,
            cert: 'arn:aws:acm:us-east-1:211125391360:certificate/d460f681-a803-4f4a-8ad6-9cd19b241efe',
          };

    new sst.aws.Nextjs('MyWeb', {
      domain,
    });
  },
});
