const [messages, setMessages] = React.useState(
        [
            {
                _id: 12,
                createdAt: new Date(),
                text: 'All good',
                user: {
                    _id: 1,
                    name: 'Sian Pol',
                }
            },
            {
                _id: 21,
                createdAt: "2019-11-10 22:21",
                text: 'Hello user',
                user: {
                    _id: 2,
                    name: 'User New'
                }
            }]
    )

const newState = Object.assign({}, message, {name: 'Michael Scott'});
setMessages(newState);