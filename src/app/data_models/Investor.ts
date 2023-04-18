export interface Investor {
  id: number,
  name: string,
  region: string,
  upcoming_investment_contracts: Array<number>, // contracts that were purchased but haven't started
  active_investment_contracts: Array<number>, // contracts that are in progress
  completed_investment_contract: Array<number>, // completed contracts
  risk_tolerance?: number,
  preferred_market_cap_min: number,
  preferred_market_cap_max: number,
  preferred_sub_industries: Array<string>
}
