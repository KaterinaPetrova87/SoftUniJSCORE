$(function () {
        $('#submit').on('click', sendMessage);
        $('#refresh').on('click', refreshMessages);

        function sendMessage() {
            let messageJSON = {
                author: $('#author').val(),
                content: $('#content').val(),
                timestamp: Date.now()
            };

            let sendRequest = {
                url: 'https://messenger-756bb.firebaseio.com/messenger/.json',
                method: 'POST',
                data: JSON.stringify(messageJSON),
                success: refreshMessages
            };
            $.ajax(sendRequest);
        }

        function refreshMessages() {
            $.get('https://messenger-756bb.firebaseio.com/messenger/.json')
                .then(displayMessages);
        }

        function displayMessages(messagesData) {
            $('#messages').empty();
            for (let key in messagesData) {
                $('#messages').append(`${messagesData[key]['author']}: ${messagesData[key]['content']}` + '\n');
            }
        }
});