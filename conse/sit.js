// Example variables (assuming these are defined elsewhere)
let annualIncome = 50000;
let incomeSection = [30000, 60000, 90000]; // Example array of income sections

// Example loop to check against each income section
for (let i = 0; i < incomeSection.length; i++) {
    if (annualIncome > incomeSection[i]) {
        console.log(`Annual income ${annualIncome} is greater than income section ${i}: ${incomeSection[i]}`);
        // Additional logic here if needed
    }
}
