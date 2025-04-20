import express, { Express } from "express";

import setupSwagger from  "../config/swagger";

const {calculatePortfolioPerformance, largestAssetFinder, assetPercentageCalculator} = require ("../src/portfolio/portfolioPerformance")
import { Asset, PortfolioSummary } from "../src/portfolio/portfolioPerformance";

// Scenario 1
const initialInvestment: number = 1000;
const currentValue: number = 1200;

const portfolio: PortfolioSummary = calculatePortfolioPerformance(initialInvestment, currentValue);
console.log(portfolio);

// Scenario 2
const assetsListOne: Asset[] = [
	{name: "Stocks", value: 15000},
	{name: "House", value: 20000},
	{name: "Bonds", value: 10000},
];

const largestAsset: Asset = largestAssetFinder(assetsListOne);
console.log(largestAsset);

// Scenario 3
const assetsListTwo: Asset[] = [
	{name: "House", value: 100},
	{name: "Stocks", value: 300},
	{name: "Bonds", value: 600},
	{name: "Business", value: 650}
];

const assetPercentages: Asset = assetPercentageCalculator(assetsListTwo);
console.log(assetPercentages);

// Initialize Express application
const app: Express = express();

setupSwagger(app);

// Define a route
app.get("/", (req, res) => {
	res.send("Hello World!");
});

/** 
 * @openapi
 * /tasks:
 *  get:
 *   summary:  Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
*/
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks");
});

/** 
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Health checkpoint
 *   tags: [Health Check]
 *   responses:
 *    200:
 *     description: Health Check
*/
app.get("/api/v1/health", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});


export default app;