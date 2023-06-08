<script>
	let msg = [
		{
			icon: 'bi-info-circle',
			title: 'Bem-vindo(a)',
			content: 'Bem-vido(a) ao meu portfólio! Espero que curta o desigh e principalmente a experienci.'
		}
	];
</script>

<menu class="_menu">
	<dl>
		{#each msg as message, i}
			<div>
				<span class={message.icon} />
				<dt>
					{message.title}
				</dt>
				<dd>
					{message.content}
				</dd>
			</div>
			<hr />
		{/each}
	</dl>
</menu>

<style lang="less">
	menu._menu {
		border-radius: 5mm;

		max-width: @menuMaxWidth;
		min-width: @menuMinWidth;
		padding: @defaultSpacing;

		background-color: darken(@headerColor, 0.5%);

		dl {
			display: flex;
			flex-direction: column;

			&:hover {
				cursor: help;
			}

			> div {
				@iconSize: 1.3cm;

				display: grid;
				grid-template-columns: @iconSize auto;
				grid-template-rows: repeat(2, calc(@iconSize / 2));
				gap: 0 @defaultSpacing;
				grid-template-areas: 'icon title' 'icon content';

				color: @headerTextColor;

				span {
					grid-area: icon;
					align-self: center;
					justify-self: center;

					font-size: xx-large;
				}

				dt {
					grid-area: title;
					align-self: center;

					font-size: x-large;
				}
				dd {
					grid-area: content;
					align-self: center;

					overflow: hidden;
					text-align: justify;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
			hr {
				height: 1px;
				width: 100%;
				margin-block: @defaultSpacing;

				background-color: @headerTextColor;

				&:last-of-type {
					display: none;
				}
			}
		}
	}
</style>
