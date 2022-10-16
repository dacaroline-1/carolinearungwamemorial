const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

/*** Programming Notes **************************************
  Arrow Functions - es6 syntactically compact alternative to a regular function expression
  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
  or https://www.w3schools.com/js/js_arrow_function.asp

  classList property - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  */
  const date1 = document.querySelector("#date1");

  try {
      const options = {
          day: "numeric",
          month: "numeric",
          year: "numeric"
      };
      date1.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
  } catch (e) {
      alert("Error with FULL DATE code or your browser does not support Locale");
  }
  
  const copyYr = document.querySelector("#copyYr");
  // Try to complete the method with options
  try {
      const options = {
          year: "numeric"
      };
      copyYr.innerHTML = `${new Date().toLocaleDateString("en-US", options)}</span>`;
  } catch (e) {
      alert("Error with CURRENT YEAR code or your browser does not support Locale");
  }