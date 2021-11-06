import { EuiImage } from "@elastic/eui";
import React from "react";

const Image = () => (
	<EuiImage
		size="l"
		hasShadow
		caption="Random nature image"
		alt="Random nature image"
		src="https://picsum.photos/300/300"
	/>
);

export default Image;
