let publisher = require('@pact-foundation/pact-node');
let path = require('path');

let opts = {
    pactFilesOrDirs: [path.resolve(process.cwd(),'pacts')],
    pactBroker: 'http://localhost:8080/', // running pact-brocker with bundle in localhost
    pactBrokerUsername: process.env.PACT_USERNAME,
    pactBrokerPassword: process.env.PACT_PASSWORD,
    consumerVersion: '2.0.1'
};

publisher.publishPacts(opts).then(() => console.log("Pacts successfully published"));