function convert() {
    let from_unit = document.getElementById("from_unit").value;
    let to_unit = document.getElementById("to_unit").value;
    let from_value = parseFloat(document.getElementById("from_value").value);

    let result = 0;

    if (from_unit === "bit") {
        if (to_unit === "bit") {
            result = from_value;
        } else if (to_unit === "byte") {
            result = from_value / 8;
        } else if (to_unit === "kilobyte") {
            result = from_value / 8000;
        } else if (to_unit === "megabyte") {
            result = from_value / 8e+6;
        } else if (to_unit === "gigabyte") {
            result = from_value / 8e+9;
        }
    } else if (from_unit === "byte") {
        if (to_unit === "bit") {
            result = from_value * 8;
        } else if (to_unit === "byte") {
            result = from_value;
        } else if (to_unit === "kilobyte") {
            result = from_value / 1024;
        } else if (to_unit === "megabyte") {
            result = from_value / 1.049e+6;
        } else if (to_unit === "gigabyte") {
            result = from_value / 1.074e+9;
        }
    } else if (from_unit === "kilobyte") {
        if (to_unit === "bit") {
            result = from_value * 8000;
        } else if (to_unit === "byte") {
            result = from_value * 1024;
        } else if (to_unit === "kilobyte") {
            result = from_value;
        } else if (to_unit === "megabyte") {
            result = from_value / 1024;
        } else if (to_unit === "gigabyte") {
            result = from_value / 1049000;
        }
    } else if (from_unit === "megabyte") {
        if (to_unit === "bit") {
            result = from_value * 8e+6;
        } else if (to_unit === "byte") {
            result = from_value * 1.049e+6;
        } else if (to_unit === "kilobyte") {
            result = from_value * 1024;
        } else if (to_unit === "megabyte") {
            result = from_value;
        } else if (to_unit === "gigabyte") {
            result = from_value / 1024;
        }
    } else if (from_unit === "gigabyte") {
        if (to_unit === "bit") {
            result = from_value * 8e+9;
        } else if (to_unit === "byte") {
            result = from_value * 1.074e+9;
        } else if (to_unit === "kilobyte") {
            result = from_value * 1049000;
        } else if (to_unit === "megabyte") {
            result = from_value * 1024;
        } else if (to_unit === "gigabyte") {
            result = from_value;
        }
    }

    document.getElementById("result").innerText = `${from_value} ${from_unit} = ${result.toFixed(4)} ${to_unit}`;
}