import React from "react";

import { EuiCard, EuiIcon, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";

const icons = ["Beats", "Cloud", "Kibana"];

const cardNodes = icons.map(function (item, index) {
	return (
		<EuiFlexItem key={index}>
			<EuiCard
				icon={<EuiIcon size="xxl" type={`logo${item}`} />}
				title={`Elastic ${item}`}
				isDisabled={item === "Kibana" ? true : false}
				description="Example of a card's description. Stick to one or two sentences."
				onClick={() => {}}
			/>
		</EuiFlexItem>
	);
});

export default () => <EuiFlexGroup gutterSize="l">{cardNodes}</EuiFlexGroup>;
