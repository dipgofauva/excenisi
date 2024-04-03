class Individual {
    private occupation: string;

    constructor(occupation: string) {
        this.occupation = occupation;
    }

    // Method to get the individual's occupation
    public getOccupation(): string {
        return this.occupation;
    }
}

// Usage
const Riyad = new Individual('Software Developer');
console.log(Riyad.getOccupation()); // Outputs: Software Developer
