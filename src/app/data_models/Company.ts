export interface Company {
  id: number,
  name: string,
  url: string,
  description: string,
	industry: string,
	country: string,
	total_funding_m: string, // in millions of USD
	all_people: string,
	all_investors: string,
	your_collections: string,
	team_tag: string,
	expert_collections: string,
	esp: string,
	market_cap_m: string,
	stock_price_dollars: string,
	stock_price_1_week_percent_change: string,
	latest_revenue_min_m: string, // in millions of USD
	latest_revenue_max_m: string, // in millions of USD
	revenue_time_period: string,
	latest_revenue_multiple_min: string,
	latest_revenue_multiple_max: string,
	company_status: string,
	company_id: string,
	organization_id: string,
	founded_year: string,
	competitors: string,
	parent_company: string,
	subsidiaries: string,
	sector: string,
	sub_industry: string,
	continent: string,
	state: string,
	city: string,
	street: string,
	zip_code: string,
	latest_exit_round: string,
	date_of_exit: string,
	acquirer: string,
	vc_backed: string,
	latest_funding_round: string,
	latest_funding_date: string,
	latest_funding_amount_m: string,
	latest_funding_simplified_round: string,
	latest_funding_investors: string
}
