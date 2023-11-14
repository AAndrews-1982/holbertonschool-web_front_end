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
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            primeCount++;
        }
    }

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    console.log(`Execution time of counting prime numbers was ${executionTime} milliseconds.`);
    return primeCount;
}

// Call the function
const result = countPrimeNumbers();
console.log(`Number of prime numbers: ${result}`);
