const ExchangeRate = ({ exchangeData }) => {
	return (
		<div className="exhange-rate-display">
			<h3>Exchange Rate</h3>
			<h1>{exchangeData.exchangeRate}</h1>
			<p>
				{exchangeData.primaryCurrency} to {exchangeData.secondaryCurrency}
			</p>
		</div>
	);
};

export default ExchangeRate;
