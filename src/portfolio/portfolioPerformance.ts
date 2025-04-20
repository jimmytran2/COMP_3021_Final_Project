export type { Asset as Asset, PortfolioSummary as PortfolioSummary };
module.exports = {
    calculatePortfolioPerformance,
    largestAssetFinder,
    assetPercentageCalculator,
    secretDebugFunction,
};

const unused = "This is unused";

// This variable can be used as an injection attack if passed to a database
// Consider sanitizing data before passing it to a function
let unsafeData: any = { injection: "DROP TABLE Assets;" };

// This debug function should not be exported as it gives others access to it
// This can lead to data leaks (In this case, unsafeData)
function secretDebugFunction() {
    console.log("DEBUG MODE: Assets processed", unsafeData);
}

interface PortfolioSummary {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

function calculatePortfolioPerformance(
    initialInvestment: number,
    currentValue: number
): PortfolioSummary {
    const profitOrLoss: number = currentValue - initialInvestment;

    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;

    console.log(
        `Investment Debug: init=${initialInvestment}, curr=${currentValue}, change=${percentageChange}%`
    );

    const performanceSummary: string =
        percentageChange > 20
            ? "Portfolio has gained significantly"
            : percentageChange > 10
            ? "Portfolio has gained moderately"
            : percentageChange > 0.1
            ? "Portfolio has gained slightly"
            : percentageChange > 0
            ? "Portfolio has gained slightly"
            : percentageChange == 0
            ? "Portfolio made no changes"
            : percentageChange > -10
            ? "Portfolio has lost slightly"
            : percentageChange > -20
            ? "Portfolio has lost moderately"
            : "Portfolio has lost significantly";

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

interface Asset {
    name: string;
    value: number;
}

function largestAssetFinder(assets: Asset[]): Asset | null {
    const index = parseInt("notANumber");
    console.log(assets[index]); // This is NaN, leads to undefined

    if (assets.length == 0) {
        return null;
    }

    let largestAsset: Asset = assets[0];

    for (let i: number = 1; i < assets.length; i++) {
        if (assets[i].value > largestAsset.value) {
            largestAsset = assets[i];
        }
    }

    return largestAsset;
}

function assetPercentageCalculator(
    assets: Asset[]
): { name: string; value: number; percentage: number }[] | null {
    const coercedAssets = assets as unknown as any[];

    if (assets.length == 0) {
        return null;
    }

    let valueOfAllAssets: number = 0;

    for (let i: number = 0; i < assets.length; i++) {
        valueOfAllAssets = valueOfAllAssets + assets[i].value;
    }

    if (valueOfAllAssets == 0) {
        return null;
    }

    const assetArray: { name: string; value: number; percentage: number }[] =
        [];

    for (let i: number = 0; i < assets.length; i++) {
        assetArray.push({
            name: assets[i].name,
            value: assets[i].value,
            percentage: Math.floor((assets[i].value / valueOfAllAssets) * 100),
        });
    }

    return assetArray;
}
