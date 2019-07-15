const {MessageProviderPact} = require('@pact-foundation/pact');
const {CreateUserEventProducer} = require('./user-event-producer');
const path = require('path');

describe("message producer", () => {

    const messagePact = new MessageProviderPact({
        messageProviders: {
            "a user created message": () => CreateUserEventProducer.produceUserCreatedEvent(),
        },
        log: path.resolve(process.cwd(), "logs", "pact.log"),
        logLevel: "info",
        provider: "node-message-provider",

        pactUrls: [path.resolve(process.cwd() ,"pacts", "node-message-consumer-node-message-provider.json")],
        tags: ['latest']
    });

    describe("'user created' message producer", () => {

        it("should create a valid user created message", (done) => {
            messagePact
                .verify()
                .then(() => done(), (error) => done(error));
        }).timeout(5000);

    });

});