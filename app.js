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
        contentDiv.innerHTML = '';
        var newSection = document.createElement('section');
        switch (page) {
            case 'persona':
                newSection.innerHTML = generatePromptContent('Persona Prompts', [
                    {prompt: 'Act as an expert in quantum physics', example: 'Prompt for success: By asking the model to act as an expert, we\'re guiding it to give a high-quality, knowledgeable response.'},
                    {prompt: 'Pretend you are a fitness trainer', example: 'Using specific roles helps to align the output with the expertise expected from such roles.'},
                    {prompt: 'Speak as if you were an environmental scientist', example: 'This prompt type engages the model to assume a specific professional identity, driving more accurate responses.'},
                    {prompt: 'Assume the role of a historian', example: 'Encourages the model to provide detailed and contextually appropriate responses, particularly when dealing with historical facts.'},
                    {prompt: 'Behave as a movie critic', example: 'Using this prompt type allows the model to adopt a critical and analytical perspective in its responses.'},
                ]);
                break;

            case 'tone':
                newSection.innerHTML = generatePromptContent('Tone Prompts', [
                    {prompt: 'Write in a self-reflective tone', example: 'Backchecking strategy: The model is encouraged to reflect on its past responses, enhancing the quality of the dialogue.'},
                    {prompt: 'Write in an optimistic tone', example: 'Tone prompts influence the sentiment of the output, providing emotionally consistent responses.'},
                    {prompt: 'Compose in a professional manner', example: 'Guides the model to provide businesslike and formal responses, suitable for professional communication.'},
                    {prompt: 'Write with a humorous style', example: 'This can be used when the aim is to create light-hearted and entertaining content.'},
                    {prompt: 'Adopt a sympathetic tone', example: 'Useful in scenarios that require empathetic communication, like responding to user frustrations.'},
                ]);
                break;

            case 'format':
                newSection.innerHTML = generatePromptContent('Format Prompts', [
                    {prompt: 'Write this in a step-by-step format', example: 'Iterative dialogue strategy: By breaking complex tasks down into simpler, step-by-step instructions, the model can better handle the task.'},
                    {prompt: 'Compose this in a poetic format', example: 'Format prompts can help in creating responses in various creative forms like poems, songs etc.'},
                    {prompt: 'Present this as a bullet-point list', example: 'This prompt helps in producing concise and structured responses, suitable for easy readability.'},
                    {prompt: 'Express this in a diagrammatic form', example: 'Though text-based, the model can be instructed to generate ASCII diagrams or describe visual information.'},
                    {prompt: 'Deliver this information in an interview format', example: 'This guides the model to structure the information as a series of questions and answers.'},
                ]);
                break;

            case 'deduction':
                newSection.innerHTML = generatePromptContent('Deduction Prompts', [
                    {prompt: 'Translate this English text to French, maintaining a formal tone', example: 'Prompt detailing strategy: By being explicit about the task (translation) and specifying the tone (formal), we\'re guiding the model to generate a specific output.'},
                    {prompt: 'Generate a summary for the following text', example: 'Task-specific prompts like this guide the model to perform specific operations on the input.'},
                    {prompt: 'Deduce the key themes from the given text', example: 'This instructs the model to extract key points or themes from a piece of text.'},
                    {prompt: 'Predict the next event based on the following sequence', example: 'Prompts like this direct the model to make logical inferences based on the given information.'},
                    {prompt: 'Determine the sentiment of the following review', example: 'The model can perform sentiment analysis and return positive, negative, or neutral.'},
                ]);
                break;

            case 'fewshot':
                newSection.innerHTML = generatePromptContent('Few-Shot Learning Prompts', [
                    {prompt: 'Write a Q&A pair and then answer the new question', example: 'Few-shot learning: By providing an example of a Q&A pair, we\'re setting a pattern that the model can follow when answering the new question.'},
                    {prompt: 'Translate the following sentences from English to German', example: 'Providing a few translated sentences before the actual translation task can improve the translation accuracy.'},
                    {prompt: 'Identify the mistakes in the following sentences', example: 'By providing some sentences with their corrections, the model can learn to identify mistakes in the new sentences.'},
                    {prompt: 'Write a story based on the following story beginnings', example: 'Providing some story beginnings and their continuations can help the model generate a story continuation for a new beginning.'},
                    {prompt: 'Classify the following sentences into categories', example: 'By providing examples of sentences with their respective categories, the model can classify new sentences into these categories.'},
                ]);
                break;
            

            case 'treeofthoughts':
                newSection.innerHTML = generatePromptContent('Tree of Thoughts Prompts', [
                    {prompt: 'Generate three potential answers to the following question and choose the best one', example: 'Tree of thoughts strategy: By generating multiple responses and then choosing the best one, we can generate a more diverse set of responses and maintain control over the direction of the conversation.'},
                    {prompt: 'Produce three possible endings to the following story and pick the most compelling', example: 'This strategy can be used for creative tasks like story writing to generate diverse and interesting content.'},
                    {prompt: 'Generate three possible explanations for the following phenomenon and select the most plausible', example: 'This technique can be helpful in scientific or investigative tasks where multiple hypotheses need to be considered.'},
                    {prompt: 'Devise three potential solutions to the following problem and choose the most effective', example: 'Applicable in problem-solving scenarios where multiple solutions can be considered and the most effective one selected.'},
                    {prompt: 'Formulate three potential responses to the following statement and pick the most appropriate', example: 'This strategy can be useful in conversational scenarios, ensuring an appropriate and contextually relevant response.'},
                ]);
                break;

            case 'reference':
                newSection.innerHTML = '<h2>About this Cheat Sheet</h2>'
                    + '<div class="centered">'
                    + '<img src="Maximizing Large Language Models 1.jpg" alt="Part 1">'
                    + '<img src="Maximizing Large Language Models 2.jpg" alt="Part 2">'
                    + '<img src="Maximizing Large Language Models 3.jpg" alt="Part 3">'
                    + '</div>';
                break;
            default:
                newSection.innerHTML = '';
        }
        contentDiv.appendChild(newSection);

        // Adds click event listeners to copy buttons
        var copyButtons = document.getElementsByClassName('copy-button');
        for (var i = 0; i < copyButtons.length; i++) {
            copyButtons[i].addEventListener('click', function(event) {
                // The text to copy is stored in the "data-text" attribute
                var textToCopy = event.target.dataset.text;
                navigator.clipboard.writeText(textToCopy);
            });
        }
    }

    // Generates HTML for a list of prompts
    function generatePromptContent(title, promptsWithExamples) {
        var content = '<h2>' + title + '</h2>';
        for (var i = 0; i < promptsWithExamples.length; i++) {
            content += '<div class="prompt-box"><h3>' + promptsWithExamples[i].prompt + '</h3><p>' + promptsWithExamples[i].example + '</p><button class="copy-button" data-text="' + promptsWithExamples[i].prompt + '">Copy to Clipboard</button></div>';
        }
        return content;
    }
}
