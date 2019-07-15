const UserCreatedEvent = require('../common/user-created-event');

exports.CreateUserEventProducer = {
    produceUserCreatedEvent: () => {
        return new Promise((resolve, reject) => {
            resolve(new UserCreatedEvent('omid', 'shams',12, 231));
        });
    }
};
