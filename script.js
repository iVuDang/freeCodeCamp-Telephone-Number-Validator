
//===============================================================================
// START JAVASCRIPT FUNCTION 
function telephoneCheck(str) {                                            // L1
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;       // L2
    return regex.test(str);                                                 // L3
  }
  // END JAVASCRIPT FUNCTION 
  
  // TEST
  console.log(telephoneCheck("555-555-5555"));
  
  
  // NOTES: 
  /*
  L1 - function name (input) {}
  L2 -
  a) / - start of a regex
  
  b) ^ - ^ and $ denotes start and end of a string
  
  c) (1\s?)? - \s denotes a space, ? denotes optional space. This will match '1 ' or '1' by itself. ()? groups entire exp, noting it is optional whether '1' or '1 ' exists. 
  
    [abc] - character class matches any single character in the string that contains, a , b , c, does not have to be together. 
    (a|b|c) - same as above 
    (abc) - matches abc as a group, has to be together to match.
  
  d) 
  ( - start of capturing group
    \( - need to escape special characters using backdash \, and then matches right bracket
      \d{3} - \d matches any digit, {} quantifies how many digits, THEREFORE, need to match 3 digits
        \) - need to escape special characters using backdash \, and then matches left bracket
   | - OR statement
      \d{3} \d matches any digit, {} quantifies how many digits, THEREFORE, need to match 3 digits
  ) - end of capturing group. This group will match either ### or (###)
  
  e) 
  [ - start of character class. We use this because we want to check if any single character is contained, while () would captured it as a group. Could also use ( | ), 
    \s - matches any space
    \- - matches any dashes 
  ]? - character class is optional e.g. '##' will match. '# #' '#-#' if exists, will also match.   
  
  f) $ - ^ and $ denotes start and end of a string
  
  
  L3 - return statement will result in true or false. We return our variable 'regex', with .test() to see if the expression we wrote applies to the str input. 
  .test() method executes a search for a match between a regular expression and a specified string
  */
  
  
  // FCC - Code Explanation:
  /* 
  ^ denotes the beginning of the string.
  
  (1\s?)? allows for “1” or "1 " if there is one.
  
  \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
  
  x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
  
  [\s\-]? checks for spaces or dashes between the groups of digits.
  
  $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
      
  Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.
  */
  
  
  
  
  //===============================================================================
  /* Code from bsyzk */
  
  // DOM - set up variables 
  const input = document.getElementById('input');
  const buttons = document.querySelectorAll('.button');
  const resultsDiv = document.getElementById('results');
  const callButtonDiv = document.getElementById('callButton');
  
  
  // add functionality to each number button
  buttons.forEach((button) => {                                         // refers to DOM variable 
    button.addEventListener('click', (e) => {                           //(e) indicates event object. Mouse click will execute 
      
      let number;                                                       // create local variable called 'number'
      
      if (e.target.tagName == 'SPAN' || e.target.tagName == 'P') {      // if the target div has a span or p element, execute below
        number = e.target.parentElement.attributes.number.value;        // refers to the attribute 'number' in the div, and converts it to a value. 
      } else {
        number = e.target.attributes.number.value;                      // parentElement refers to the DOM node's parent element
      }
      input.value += number;                                            // input.value refers to our DOM variable converted to a value. 
    });                                                                 // The input will add to our local variable 'number' placeholder
  });
  
  
  //===============================================================================
  // API to display the results
  function displayResults(input) {
    let result = telephoneCheck(input);                                 // creates local variable called result
    
    if (result) {
      resultsDiv.innerHTML = 'Calling...';                              // refers to DOM variable if function runs and is true. 
    } else {
      resultsDiv.innerHTML = 'Invalid phone number';
    }
  }
  
  // API to execute displayResults function using keyboard enter
  input.addEventListener('keydown', (e) => {                             // refers to the input text window
    if (e.keyCode === 13) {                                              // e.keyCode if pressed key has a printed representation equal to 13 digits, execute 
      displayResults(input.value);                                       // calls function 'displayResults' to run on DOM variable input, and converts to value. 
    }
  });
  
  // API to execute displayResults function using mouse click
  callButtonDiv.addEventListener('click', (e) => {                        // refers to the callButton 
    displayResults(input.value);                                          // calls function 'displayResults' to run on DOM variable input, and converts to value. 
  });
  