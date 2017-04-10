var questions = [
  'I am the life of the party.',
  'I feel little concern for others',
  'I have a vivid imagination',
  'I rarely do something just out of sheer curiosity.',
  'People can rarely upset me.',
  'I feel comfortable around people.',
  'I am quiet around strangers.',
  'I rarely get carried away by fantasies and ideas.',
  'I spend time reflecting on things.',
  'I feel more energetic after spending time with a group of people.'
]


$(document).ready(function() {

  for(var i = 0; i < questions.length; i++) {
    var questionsContainer = $('#questions');

    // create heading to display the question number
    var heading = $('<h3>Question ' + (i + 1) + '</h3>');

    // create question from questions array and add question # as attr
    var label = $('<label>' + questions[i] + '</label>');
    label.attr('for', 'question-'+(i + 1));

    // create dropdown element and dropdown values
    var dropdownOptions = $('<select type="number">');
    var optionPlaceholder = $('<option value="" disabled selected>Select an Option</option>');
    var option1 = $('<option value="1">1 (Strongly Disagree)</option>');
    var option2 = $('<option value="2">2</option>');
    var option3 = $('<option value="3">3</option>');
    var option4 = $('<option value="4">4</option>');
    var option5 = $('<option value="5">5 (Strongly Agree)</option>');

    // construct dropdown element
    dropdownOptions
      .addClass('question-dropdown')
      .attr('id', 'question-'+(i+1))
      // .attr('name', '[responses][question-'+ (i+1) +']')
      .attr('name', 'responses')
      .append(optionPlaceholder)
      .append(option1)
      .append(option2)
      .append(option3)
      .append(option4)
      .append(option5)

    // append fully constructed question component to div with id  questionsContainer
    questionsContainer
    .append(heading)
    .append(label)
    .append(dropdownOptions);

  };

});