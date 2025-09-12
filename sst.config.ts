/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "harmonix-remix-web",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      // providers: {
      //   aws: { region: "us-east-1" },
      //   "@pulumi/aws": "7.5.0", // explicitly pin Pulumi provider version
      // },
    };
  },

  async run() {
    const domainCertSecret = new sst.Secret("DomainCert");

    new sst.aws.Remix("HarmonixRemixWeb", {
      domain: {
        name: "harmonix.fi",
        dns: false,
        cert: domainCertSecret.value,
      },
    });
  },
});
