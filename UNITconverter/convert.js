function convert() 
  {
    // Get the user input values
    let inputUnit = document.getElementById("inputUnit").value;
    let inputValue = document.getElementById("inputValue").value;
    let outputUnit = document.getElementById("outputUnit").value;
    let outputValue;
    var ahmed;
    // Convert the input value to bytes
    let bytes = 0;

    if (inputUnit = bytes) {
      bites=getElementById('inputValue')/8;
    }
     else {}
    switch (inputUnit) {
      case "bit":
        bytes = inputValue / 8;
        break;
      case "byte":
        bytes = inputValue;
        break;
      case "kb":
        bytes = inputValue * 1024;
        break;
      case "mb":
        bytes = inputValue * 1024 * 1024;
        break;
      case "gb":
        bytes = inputValue * 1024 * 1024 * 1024;
        break;
    }
    switch (outputUnit) {
      case "bit":
        outputValue = bytes * 8;
        break;
      case "byte":
        outputValue = bytes;
        break;
      case "kb":
        outputValue = bytes / 1024;
        break;
      case "mb":
        outputValue = bytes / 1024 / 1024;
        break;
      case "gb":
        outputValue = bytes / 1024 / 1024 / 1024;
        break;
    }

    document.getElementById("outputTTT").value = outputValue;
  }