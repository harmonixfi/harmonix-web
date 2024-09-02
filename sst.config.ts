/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "harmonix-web",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },

  async run() {
    const domainCertSecret = new sst.Secret("DomainCert");

    new sst.aws.Remix("HarmonixWeb", {
      domain: {
        name: "harmonix.fi",
        dns: false,
        cert: domainCertSecret.value,
      },
    });
  },
});
