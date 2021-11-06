import "@elastic/eui/dist/eui_theme_light.css";

import "./App.css";
import Card from "./components/Card";
import Image from "./components/Image";
import Text from "./components/Text";

function App() {
	return (
		<div className="App">
			<Text />
			<Image />
			<Card />
		</div>
	);
}

export default App;
