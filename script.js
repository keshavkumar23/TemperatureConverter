function convertTemperature() {
            const temperature = parseFloat(document.getElementById("temperature").value);
            const fromUnit = document.getElementById("fromUnit").value;
            const toUnit = document.getElementById("toUnit").value;

            if (isNaN(temperature) || fromUnit === "" || toUnit === "") {
                document.getElementById("validationMessage").innerHTML = "Please fill in all fields with valid data.";
                return;
            } else {
                document.getElementById("validationMessage").innerHTML = "";
            }

            let result;

            if (fromUnit === toUnit) {
                result = temperature;
            } else if (fromUnit === "celsius") {
                if (toUnit === "fahrenheit") {
                    result = (temperature * 9/5) + 32;
                } else if (toUnit === "kelvin") {
                    result = temperature + 273.15;
                }
            } else if (fromUnit === "fahrenheit") {
                if (toUnit === "celsius") {
                    result = (temperature - 32) * 5/9;
                } else if (toUnit === "kelvin") {
                    result = (temperature - 32) * 5/9 + 273.15;
                }
            } else if (fromUnit === "kelvin") {
                if (toUnit === "celsius") {
                    result = temperature - 273.15;
                } else if (toUnit === "fahrenheit") {
                    result = (temperature - 273.15) * 9/5 + 32;
                }
            }

            document.getElementById("result").innerHTML = `${temperature} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
        }

        function clearFields() {
            document.getElementById("temperature").value = "";
            document.getElementById("fromUnit").selectedIndex = 0;
            document.getElementById("toUnit").selectedIndex = 0;
            document.getElementById("result").innerHTML = "";
            document.getElementById("validationMessage").innerHTML = "";
        }