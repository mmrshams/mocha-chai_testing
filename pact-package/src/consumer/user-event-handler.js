const UserCreatedEvent = require('../common/user-created-event');

exports.UserEventHandler = {
    handleUserCreatedEvent:(message) => {
        UserCreatedEvent.validateName(message);
        UserCreatedEvent.validateLastname(message);
        UserCreatedEvent.validateAge(message);
        UserCreatedEvent.validateCode(message);

        // pass message into business logic
        // note that the business logic should be mocked away for the contract test

    }
};
