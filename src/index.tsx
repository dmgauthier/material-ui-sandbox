import * as React from "react";
import { render } from "react-dom";
import { Badge, Icon } from "antd";
import "antd/dist/antd.css";

class App extends React.Component {
	render() {
		return (
			<div>
				Badge with react node <Badge count={<Icon type="clock-circle-o" />} />
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
