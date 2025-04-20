const { calculatePortfolioPerformance, largestAssetFinder, assetPercentageCalculator} = require ("../src/portfolio/portfolioPerformance")
import { Asset } from "../src/portfolio/portfolioPerformance";

describe("calculatePortfolioPerforance function", () => {
    it("should return correct performance summary for percentageChange over 20", () => {
        const actual = calculatePortfolioPerformance(1000, 2000);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(2000);
        expect(actual.profitOrLoss).toBe(1000);
        expect(actual.percentageChange).toBe(100);
        expect(actual.performanceSummary).toBe("Portfolio has gained significantly");
    })

    it("should return correct performance summary for percentageChange of 20", () => {
        const actual = calculatePortfolioPerformance(1000, 1200);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1200);
        expect(actual.profitOrLoss).toBe(200);
        expect(actual.percentageChange).toBe(20);
        expect(actual.performanceSummary).toBe("Portfolio has gained moderately");
    })

    it("should return correct performance summary for percentageChange between 10 and 20", () => {
        const actual = calculatePortfolioPerformance(1000, 1150);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1150);
        expect(actual.profitOrLoss).toBe(150);
        expect(actual.percentageChange).toBe(15);
        expect(actual.performanceSummary).toBe("Portfolio has gained moderately");
    })

    it("should return correct performance summary for percentageChange of 10", () => {
        const actual = calculatePortfolioPerformance(1000, 1100);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1100);
        expect(actual.profitOrLoss).toBe(100);
        expect(actual.percentageChange).toBe(10);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange between 0.1 and 10", () => {
        const actual = calculatePortfolioPerformance(1000, 1050);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1050);
        expect(actual.profitOrLoss).toBe(50);
        expect(actual.percentageChange).toBe(5);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })


    it("should return correct performance summary for percentageChange of 0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 1001);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1001);
        expect(actual.profitOrLoss).toBe(1);
        expect(actual.percentageChange).toBe(0.1);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange between 0 and 0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 1000.5);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1000.5);
        expect(actual.profitOrLoss).toBe(0.5);
        expect(actual.percentageChange).toBe(0.05);
        expect(actual.performanceSummary).toBe("Portfolio has gained slightly");
    })

    it("should return correct performance summary for percentageChange of 0", () => {
        const actual = calculatePortfolioPerformance(1000, 1000);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(1000);
        expect(actual.profitOrLoss).toBe(0);
        expect(actual.percentageChange).toBe(0);
        expect(actual.performanceSummary).toBe("Portfolio made no changes");
    })

    it("should return correct performance summary for percentageChange between -0.1 and 0", () => {
        const actual = calculatePortfolioPerformance(1000, 999.5);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(999.5);
        expect(actual.profitOrLoss).toBe(-0.5);
        expect(actual.percentageChange).toBe(-0.05);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange of -0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 999);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(999);
        expect(actual.profitOrLoss).toBe(-1);
        expect(actual.percentageChange).toBe(-0.1);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange between -10 and -0.1", () => {
        const actual = calculatePortfolioPerformance(1000, 950);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(950);
        expect(actual.profitOrLoss).toBe(-50);
        expect(actual.percentageChange).toBe(-5);
        expect(actual.performanceSummary).toBe("Portfolio has lost slightly");
    })

    it("should return correct performance summary for percentageChange of -10", () => {
        const actual = calculatePortfolioPerformance(1000, 900);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(900);
        expect(actual.profitOrLoss).toBe(-100);
        expect(actual.percentageChange).toBe(-10);
        expect(actual.performanceSummary).toBe("Portfolio has lost moderately");
    })

    it("should return correct performance summary for percentageChange between -20 and -10", () => {
        const actual = calculatePortfolioPerformance(1000, 850);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(850);
        expect(actual.profitOrLoss).toBe(-150);
        expect(actual.percentageChange).toBe(-15);
        expect(actual.performanceSummary).toBe("Portfolio has lost moderately");
    })

    it("should return correct performance summary for percentageChange of -20", () => {
        const actual = calculatePortfolioPerformance(1000, 800);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(800);
        expect(actual.profitOrLoss).toBe(-200);
        expect(actual.percentageChange).toBe(-20);
        expect(actual.performanceSummary).toBe("Portfolio has lost significantly");
    })

    it("should return correct performance summary for percentageChange over -20", () => {
        const actual = calculatePortfolioPerformance(1000, 700);
        expect(actual.initialInvestment).toBe(1000);
        expect(actual.currentValue).toBe(700);
        expect(actual.profitOrLoss).toBe(-300);
        expect(actual.percentageChange).toBe(-30);
        expect(actual.performanceSummary).toBe("Portfolio has lost significantly");
    })
})

describe("largestAssetFinder function", () => {
    it("should return the asset with the highest value", () => {
        const assets: Asset[] = [
            {name: "House", value: 20000},
            {name: "Stocks", value: 15000},
            {name: "Bonds", value: 10000}
        ];

        const expected: Asset = {name: "House", value: 20000};

        const actual: Asset = largestAssetFinder(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return null when there are no assets", () => {
        const assets: Asset[] = [];
        
        const expected: null = null;

        const actual: Asset = largestAssetFinder(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return the first largest asset in the list if there are assets of equal value", () => {
        const assets: Asset[] = [
            {name: "House", value: 10000},
            {name: "Stocks", value: 20000},
            {name: "Bonds", value: 20000}
        ];

        const expected: Asset = {name: "Stocks", value: 20000};

        const actual: Asset = largestAssetFinder(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should work with assets with negative values", () => {
        const assets: Asset[] = [
            {name: "House", value: -20000},
            {name: "Stocks", value: -15000},
            {name: "Bonds", value: -10000}
        ];

        const expected: Asset = {name: "Bonds", value: -10000};

        const actual: Asset = largestAssetFinder(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should the only asset in the list, if theres only 1 asset", () => {
        const assets: Asset[] = [
            {name: "House", value: 10000},
        ];

        const expected: Asset = {name: "House", value: 10000};

        const actual: Asset = largestAssetFinder(assets);

        expect(expected).toStrictEqual(actual);
    })

})

describe("assetPercentageCalculator", () => {
    it("should return null when list of assets is empty", () => {
        const assets: Asset[] = [];

        const expected: null = null;
        
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);

    })

    it("should return correct calculated percentages for assets with different values", () => {
        const assets: Asset[] = [
            {name: "House", value: 100},
            {name: "Stocks", value: 300},
            {name: "Bonds", value: 600}
        ];
        const expected: {name: string; value: number; percentage: number}[] = [
            {name: "House", value: 100, percentage: 10},
            {name: "Stocks", value: 300, percentage: 30},
            {name: "Bonds", value: 600, percentage: 60}
        ];
        
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return correct calculated percentages for assets with equal values", () => {
        const assets: Asset[] = [
            {name: "House", value: 100},
            {name: "Stocks", value: 100},
            {name: "Bonds", value: 100}
        ];
        const expected: {name: string; value: number; percentage: number}[] = [
            {name: "House", value: 100, percentage: 33},
            {name: "Stocks", value: 100, percentage: 33},
            {name: "Bonds", value: 100, percentage: 33}
        ];
        
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return correct calculated percentages with assets that have a value of 0", () => {
        const assets: Asset[] = [
            {name: "House", value: 0},
            {name: "Stocks", value: 0},
            {name: "Bonds", value: 600}
        ];
        const expected: {name: string; value: number; percentage: number}[] = [
            {name: "House", value: 0, percentage: 0},
            {name: "Stocks", value: 0, percentage: 0},
            {name: "Bonds", value: 600, percentage: 100}
        ];
        
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return null when all assets have 0 value", () => {
        const assets: Asset[] = [
            {name: "House", value: 0},
            {name: "Stocks", value: 0},
            {name: "Bonds", value: 0}
        ];
        const expected: null = null;
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);
    })

    it("should return correct calculated percentage with 1 asset", () => {
        const assets: Asset[] = [
            {name: "House", value: 250}
        ];
        const expected: {name: string; value: number; percentage: number}[] = [
            {name: "House", value: 250, percentage: 100}
        ];
        
        const actual: Asset = assetPercentageCalculator(assets);

        expect(expected).toStrictEqual(actual);
    })
})