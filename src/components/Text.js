import {
	EuiHorizontalRule,
	EuiSpacer,
	EuiText,
	EuiTextColor,
	EuiTitle,
} from "@elastic/eui";
import React from "react";

const Text = () => {
	return (
		<div>
			<EuiTitle>
				<h2>
					<EuiTextColor color="default">You </EuiTextColor>
					<EuiTextColor color="success">use </EuiTextColor>
					<EuiTextColor color="accent">it </EuiTextColor>
					<EuiTextColor color="warning">on </EuiTextColor>
					<EuiTextColor color="danger">anything!</EuiTextColor>
				</h2>
			</EuiTitle>
			<EuiText>
				<h1 size="m">I am a Elastic ui</h1>
				<h2>I am a Elastic ui</h2>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla error
					<a href="#">unfashionable</a> enim alias, a fugiat itaque nemo et
					quidem non tempore aut, blanditiis ad? Molestias reiciendis maiores ad
					suscipit laboriosam voluptatem?
				</p>
				<EuiHorizontalRule />

				<dl className="eui-definitionListReverse">
					<dt>Name</dt>
					<dd>The Elder Scrolls: Morrowind</dd>
					<dt>Game style</dt>
					<dd>Open-world, fantasy, action role-playing</dd>
					<dt>Release date</dt>
					<dd>2002</dd>
				</dl>
			</EuiText>
			<EuiSpacer size="l" />

			<EuiText>
				<p>
					<EuiTextColor color="default">Default text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="subdued">Subdued text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="success">Success text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="accent">Accent text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="warning">Warning text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="danger">Danger text color</EuiTextColor>
				</p>
				<p>
					<EuiTextColor color="#c561dc">Custom text color</EuiTextColor>
				</p>
				<p>
					<span style={{ background: "#222" }}>
						<EuiTextColor color="ghost">
							Ghost text color is always white regardless of theme.
						</EuiTextColor>
					</span>
				</p>
			</EuiText>

			<EuiSpacer />

			<EuiText color="danger" textAlign="left">
				<h2>Works on EuiText as well.</h2>
				<p>
					Sometimes you need to color entire blocks of text, no matter what is
					in them. You can always apply color directly (versus using the
					separated component) to make it easy. Links should still{" "}
					<a href="#">properly color</a>.
				</p>
			</EuiText>
		</div>
	);
};

export default Text;
