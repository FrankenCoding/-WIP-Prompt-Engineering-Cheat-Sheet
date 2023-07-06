// This will run once the page is fully loaded
window.onload = function() {
    var buttons = document.getElementsByClassName('section-button');
    var contentDiv = document.getElementById('content');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(event) {
            var page = event.target.dataset.page;
            loadPage(page);
        });
    }

    function loadPage(page) {
        var newSection = document.createElement('section');
        switch (page) {
            case 'persona':
                newSection.innerHTML = generatePromptContent('Persona Prompts', [
                    {prompt: 'Act as a [ROLE]', example: 'Act as a detective: "The evidence leads us to believe the culprit is not who we initially suspected."'},
                    {prompt: 'Act as a historian', example: 'Act as a historian: "Back in the 19th century, societal norms were vastly different than they are today."'},
                    {prompt: 'Speak as if you are a scientist', example: 'Speak as a scientist: "Based on the data, the hypothesis seems to hold true."'},
                    {prompt: 'Pretend to be a travel guide', example: 'Pretend to be a travel guide: "On your right, you\'ll see the famous monument that was built in the early 1800s."'}
                ]);
                break;
            case 'tone':
                newSection.innerHTML = generatePromptContent('Tone Prompts', [
                    {prompt: 'Write in a casual tone', example: 'Write in a casual tone: "Hey, what\'s up? Just wanted to share this cool fact with you."'},
                    {prompt: 'Write in a formal tone', example: 'Write in a formal tone: "We hereby invite you to participate in the annual conference."'},
                    {prompt: 'Speak with excitement', example: 'Speak with excitement: "Wow! You won\'t believe what just happened!"'},
                    {prompt: 'Express the information in a calming manner', example: 'Express in a calming manner: "Take a deep breath. Everything will be alright."'}
                ]);
                break;
            case 'format':
                newSection.innerHTML = generatePromptContent('Format Prompts', [
                    {prompt: 'Write a bullet-point list', example: 'Write a bullet-point list: \n- Point 1\n- Point 2\n- Point 3'},
                    {prompt: 'Write a paragraph', example: 'Write a paragraph: "This is a simple paragraph. It has a beginning, a middle, and an end. It is concise and informative."'},
                    {prompt: 'Summarize this in one sentence', example: 'Summarize in one sentence: "The team won the match thanks to their superior tactics."'},
                    {prompt: 'Write this in a FAQ format', example: 'Write in FAQ format: \nQ: What is your return policy?\nA: Customers can return products within 30 days of purchase.'}
                ]);
                break;
            case 'about':
                newSection.innerHTML = '<h2>About this Cheat Sheet</h2><p>This is a cheat sheet for prompt engineering...</p>';
                break;
            default:
                newSection.innerHTML = '';
        }
        contentDiv.appendChild(newSection);

        // Add click event listeners to copy buttons
        var copyButtons = document.getElementsByClassName('copy-button');
        for (var i = 0; i < copyButtons.length; i++) {
            copyButtons[i].addEventListener('click', function(event) {
                // The text to copy is stored in the "data-text" attribute
                var textToCopy = event.target.dataset.text;
                navigator.clipboard.writeText(textToCopy);
            });
        }
    }

    // This function generates HTML for a list of prompts
    function generatePromptContent(title, promptsWithExamples) {
        var content = '<h2>' + title + '</h2>';
        for (var i = 0; i < promptsWithExamples.length; i++) {
            content += '<div class="prompt-box"><h3>' + promptsWithExamples[i].prompt + '</h3><p>' + promptsWithExamples[i].example + '</p><button class="copy-button" data-text="' + promptsWithExamples[i].prompt + '">Copy to Clipboard</button></div>';
        }
        return content;
    }
}
