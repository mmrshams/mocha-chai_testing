const {MessageConsumerPact, Matchers, synchronousBodyHandler} = require('@pact-foundation/pact');
const {UserEventHandler} = require('./user-event-handler');
const path = require('path');

describe("message consumer", () => {

    const messagePact = new MessageConsumerPact({
        consumer: "node-message-consumer",
        provider: "node-message-provider",
        dir: path.resolve(process.cwd(),"pacts"),
        pactfileWriteMode: "update",
        logLevel: "info",
    });

 
    describe("'user created' message Handler", () => {

        it("should accept a valid user created message", (done) => {
            messagePact
                .expectsToReceive("a user created message")
                .withContent({
                    name: Matchers.like("omid"),
                    lastname: Matchers.like("shams"),
                    age: Matchers.like(12),
                    code: Matchers.like(231)
                })
                .withMetadata({
                    "content-type": "application/json",
                })
                .verify(synchronousBodyHandler(UserEventHandler.handleUserCreatedEvent))
                .then(() => done(), (error) => done(error));
        }).timeout(5000);

    });


});