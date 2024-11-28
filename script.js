function validEmail(str) {

	if (!str || str.length === 0) {
        return false;
    }

    // Step 2: Define the regex pattern for a valid email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Step 3: Test the input string against the regex
    return emailRegex.test(str);

	

	
  
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
