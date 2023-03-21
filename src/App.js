import currencyData from './data';
import './App.css';
import Currency from './components/Currency';

function App() {
	return (
		<div className='App'>
			<h1 className='title'>Національний банк України</h1>
			<h3 className='subtitle'>
				Офіційний курс гривні до іноземних валют та облікова ціна банківських
				металів
			</h3>
			<ul className='listItems'>
				{currencyData.map((el, i) => (
					<Currency key={i} txt={el.txt} rate={el.rate} />
				))}
			</ul>
		</div>
	);
}

export default App;
