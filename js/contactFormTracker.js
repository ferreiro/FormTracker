var st = sessionStorage; // use st variable to access and save values to session storage.
var keepValueFields = document.getElementsByClassName('keepInputValue'); // Every element with the tag "keep value field" will be save/load.
var form = document.getElementsByClassName('contactForm'); // Every element with the tag "keep value field" will be save/load.
var saveTime = 1000;	// Time in miliseconds for saving user text input on session storage
var sessionStorageName = 'contactForm_';
	

	loadUserText(); // Calling the function the first time we open the page
	setInterval(saveUserText, saveTime); // Saving user inputs text each "saveTime" miliseconds
	form.onsubmit = function() { clearFormData; }; // Clear data when form is sent.

	// Clear data when the user send a form
	
	function clearFormData() {
		var stkey, stValue, total = keepValueFields.length; // total is the number of inputs we're tracking
		
		// Traversing all the session storage elements and 
		// clearing the current value for our inputs files.

		for (i = 0; i < total; i++) {
			stkey 	= sessionStorageName + i;  // get session storage key from the web form
			st.setItem(stkey, '');	// Clearing data for that specific key.
		}
	}

	// Set values to inputs field any time this function is called.
	// We load all the values when the user access this page for the firts time.

	function loadUserText() {
		var stkey, total = keepValueFields.length;

	 	// Traversing all the session storage elements and 
	 	// setting the session storage value to our inputs files.

		for (i = 0; i < total; i++) {
			stkey 	= sessionStorageName + i; 			// Setting the key name. Change this for a different name 
			if(st.getItem(stkey) != "undefined") 
				keepValueFields[i].value = st.getItem(''+ stkey + '');	// getting the value from session storage and setting the input text with dat value
		}
	}

	// Save user Text function.
	// Keeps every second the valus of the text introduces by the user.

	function saveUserText() {
		var stkey, stValue, total = keepValueFields.length;
	 	
	 	// Traversing all the session storage elements and 
	 	// keeping the current value for our inputs files.

		for (i = 0; i < total; i++) {
			stkey 	= sessionStorageName + i; 		// Setting the key name. Change this for a different name 
			stValue = keepValueFields[i].value;	// The value is getting for the element input value.
			st.setItem(stkey, stValue);			// Setting key and value to Session storage.
		}
	}

