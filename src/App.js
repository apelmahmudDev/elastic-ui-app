import "@elastic/eui/dist/eui_theme_light.css";

import "./App.css";
import Card from "./components/Card";
import Image from "./components/Image";

function App() {
	return (
		<div className="App">
			<h1 size="m">Hello Elastic Ui</h1>
			<Image />
			<Card />
		</div>
	);
}

export default App;
