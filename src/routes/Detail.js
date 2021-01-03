import React from "react";

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state === undefined) {
			history.push("/");
		}
	}
	
	render() {
		const { location } = this.props;

		if (location.state === undefined)
			return null;
		return <span>{location.state.title}</span>;
	}
}

export default Detail;