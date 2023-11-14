function countPrimeNumbers() {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const startTime = performance.now();

    let primeCount = 0;

    // Use setTimeout to defer the calculation
    setTimeout(() => {
        for (let i = 2; i <= 10000; i++) {
            if (isPrime(i)) {
                primeCount++;
            }
        }

        const endTime = performance.now();
        const executionTime = endTime - startTime;

        console.log(`Execution time of calculating prime numbers was ${executionTime} milliseconds.`);
    }, 0);

    // Return a placeholder value
    return 0;
}

// Execute the function 100 times
const totalExecutions = 100;
let totalTime = 0;

for (let i = 0; i < totalExecutions; i++) {
    totalTime += countPrimeNumbers();
}

// Calculate the average execution time
const averageTime = totalTime / totalExecutions;

// Log the average time
console.log(`Average execution time of calculating prime numbers ${totalExecutions} times was ${averageTime} milliseconds.`);
