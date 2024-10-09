/**
 * Interface representing credits for major subjects.
 * @property {number} credits - The number of major credits.
 * @property {'MajorCredits'} brand - The brand identifier for major credits.
 */
export interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
}

/**
 * Interface representing credits for minor subjects.
 * @property {number} credits - The number of minor credits.
 * @property {'MinorCredits'} brand - The brand identifier for minor credits.
 */
export interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
}

/**
 * Sums two MajorCredits objects.
 * @param {MajorCredits} subject1 - The first major credits object.
 * @param {MajorCredits} subject2 - The second major credits object.
 * @returns {MajorCredits} The sum of the two major credits objects.
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits'
    };
}

/**
 * Sums two MinorCredits objects.
 * @param {MinorCredits} subject1 - The first minor credits object.
 * @param {MinorCredits} subject2 - The second minor credits object.
 * @returns {MinorCredits} The sum of the two minor credits objects.
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits'
    };
}
