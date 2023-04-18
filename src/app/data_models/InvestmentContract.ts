export interface InvestmentContract {
  id: number,
  nominal_purchase_price: number, // Later we can add bidding for these contracts
  start_timestamp: number, // unix timestamp (millis) for when the contract starts
  end_timestamp: number, // unix timestamp (millis) for when the contract ends
  estimated_revenue_flow: number, // revenue flow estimated by startup between start and end timestamps
  fraction_of_revenues_received: number // in (0, 1]
}
