# Debugging Analysis

## Scenario 1: Portfolio Performance Tracker
-   **Breakpoint Location:** portfolioPerformance.ts - line 39
-   **Objective:** I am trying to track and ensure that profitOrLoss and percentageChange are calculated properly and at 
    the right points. Also if and when the correct perfomance summary is assigned

### Debugger Observations

-   **Variable States:** profitOrLoss = 200, percentageChange = 20, performanceSummary = "Portfolio has gained moderately"
-   **Call Stack:** (m._compile) the typescript is compiled, modules are loaded, server.ts is executed, which calls app. 
    the calculatePortfolioPerformance function in is called on line 10 (app.ts) with the defined variables. profitOrLoss
    is calculated (line 21) with the given arguments, which is than used to calculate percentageChange (line 23). percentageChange is used to
    assign the performanceSummary string (line 30-37).
-   **Behavior:** The performanceSummary for the portfolio is assigned according to the percentageChange calculation from profitOrLoss

### Analysis

I learned that the variables i am watching are being calculated and assigned properly. I also learned that there is 
room for error when handling certain inputs (0 or negatives). No unexpected behavior was observed.
If i were to improve the code for this function, i would add a try-catch block to chck if the initialInvestment is 
0 because you cannot divide by 0. I would also check if the initialInvestment is negative cause that is not possible either. 
Another improvement i would make is remove line 32, it is redundant since the line after it, (percentageChange > 0) 
checks for and evalutes to the same string



## Scenario 2: Tracking the largest asset

-   **Breakpoint Location:** portfolioPerformance.ts - line 70 and 71
-   **Objective:** Understand how the loop behaves when looping through the assets and when the largestAsset variable changes

### Debugger Observations

-   **Variable States:** assets = [	{name: "Stocks", value: 15000},
                                    {name: "House", value: 20000},
                                    {name: "Bonds", value: 10000},
                                    ]
                        (scenario2a) largestAsset - {name: 'Stock', value: 15000}
                        (scenario2b) largestAsset - {name: 'House', value: 20000}
-   **Call Stack:** server is started, server.ts is executed, which calls app.ts, runs through the declared variables,
    the largestAssetFinder function is called and is invoked. The function checks if the asset list is empty (line 63), it isnt. The first asset
    in the list is assigned the as the largestAsset (line 67). A loop interates throught the given list of assets, if the asset
    being iterated over is larger than the current largestAsset, the largestAsset variable is assigned as that asset (line 71)
-   **Behavior:** The asset in the list with the greatest value is being assigned to the largestAsset variable

### Analysis

Something i learned/noticed from using breakpoints and the debugger on this function was that when i first tested the function
with an asset list where the first item was the largest in the list, the debugger would "skip" the rest of the list. So i changed
the order of the list of assets for the purposes of debugging. After changing the order, i could see the debugger running through the 
loop until it found the biggest asset. (might have just been using the debugger wrong)
If i were to improve this code, i would like to use potential built in methods and other ways to shorten the code for
my for loop. there cleaner, more concise ways to write loops and comparisons. I would also add validation and error-handling
for the argument, in case assets contains invalid data, null, or undefined.
Doing the debugger for this function familiarized me with the behavior of the debugger with loops.



## Scenario 3: Asset Percentage of Portfolio calculation

-   **Breakpoint Location:** portfolioPerformance.ts - line 98 and 112
-   **Objective:** Investigating if the sum of all assets is being calculated properly and assets
are being pushed to the empty array properly with the new percentage property

### Debugger Observations

-   **Variable States:** assets = [
                            {name: "House", value: 100},
                            {name: "Stocks", value: 300},
                            {name: "Bonds", value: 600},
                            {name: "Business", value: 650}
                            ];
                        (scenario3a) valueOfAllAssets = 0, assetArray = Uncaught ReferenceError
                        (scenario3b) valueOfAllAssets = 1650, assetArray = []
                            - after assets were looped through and added, and assetArray was defined
                        (scenario3c) valueOfAllAssets = 1650, assetArray = [{name: 'House' ... percentage: 6},
                                                                            {name: 'Stocks' ... percentage: 18}
                                                                            {name: 'Bonds' ... percentage: 36},
                                                                            {name: 'Business' ... percentage: 39}]
                            - after assets percentage has been calculated and assets have been pushed to new array
-   **Call Stack:** server starts, server.ts is executed, calls app.ts. Code runs from top-down, through declared variables (assets),
assetPercentageCalculator function is called and invoked from portfolioPerformance.ts. The function loops through the array of assets,
that it already checked was populated. It loops through the assets and adds up the total value to get the valueOfAllAssets (1st breakpoint).
An empty array is created, "assetArray", where the list of assets is looped through and the name, value and calculated percentage is
pushed to this new empty array. This new array is then returned
-   **Behavior:** 1st breakpoint -  sum of all asset values is calculated
                  2nd breakpoint -  new array of the given assets, that includes percentage of the portfolio, is returned

### Analysis

I learned it was harder to test this function due to the fact when percentage is calculated, depending on the numbers,
you are left with recurring decimals. For "nicer" rounded numbers, i used the "floor" method to have the percentages come out
as whole numbers. Something unexpected that occurs from rounding is that there are some instances 
where the sum of the percentages does not add up to 100, since the percentages are being rounded down.
Similiar to my other functions, i could improve the code by incorporating validation and try-catches, which would throw
errors rather than returning "null". Something i could also improve is the percentage calculation. As mentioned earlier,
the sum of the percentages dont always add up to 100, due to rounding. My code could use a more refined formula for calculating.
When creating and working with this function, I became more familiar with the typescript functions, particularly when defining
return types with arrays. Rather than just saying the function returns an array, i have to be explicit and define
each item in the array and its type.