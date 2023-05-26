<script>
	import githubIcon from 'bootstrap-icons/icons/github.svg?raw';
	import shareIcon from 'bootstrap-icons/icons/share.svg?raw';
	import moreIcon from 'bootstrap-icons/icons/three-dots.svg?raw';
	import circleIcon from 'bootstrap-icons/icons/circle.svg?raw';

	import MenuNotifications from './MenuNotifications.svelte';
	import MenuOptions from './MenuOptions.svelte';
</script>

<nav>
	<div>
		<a>
			<img src={'data:image/svg+xml,' + encodeURI(circleIcon)} alt="menu" />
		</a>
	</div>

	<input type="checkbox" name="menuActive" id="notifications" class="notShow" />
	<div>
		<label for="notifications">
			<a> qui 25 de mai 20:42 </a>
		</label>
		<div class="drop center">
			<MenuNotifications />
		</div>
	</div>

	<input type="checkbox" name="menuActive" id="options" class="notShow" />
	<div>
		<label for="options">
			<a>
				<img src={'data:image/svg+xml,' + encodeURI(githubIcon)} alt="wifi" />
				<img src={'data:image/svg+xml,' + encodeURI(shareIcon)} alt="volume" />
				<img src={'data:image/svg+xml,' + encodeURI(moreIcon)} alt="battery" />
			</a>
		</label>

		<div class="drop right">
			<MenuOptions />
		</div>
	</div>
</nav>

<style lang="less">
	@bgColor: hsl(210, 55%, 5%);
	@sectionSize: @headerSize - 2mm;

	@hoverColor: lighten(@bgColor, 10%);
	nav {
		box-sizing: border-box;
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: @headerSize;
		padding-inline: 2mm;

		background-color: @bgColor;

		> div {
			position: relative;
			height: @sectionSize;
			min-width: @sectionSize;
			padding: 1mm 1.5mm;
			border-radius: 9cm;
			transition: cubic-bezier(0.86, 0, 0.07, 1) 300ms;

			&:hover {
				background-color: @hoverColor;
			}

			label {
				display: contents;
			}
			a {
				display: inline-flex;
				align-items: center;
				height: 100%;
				width: 100%;
				color: white;
				cursor: pointer;

				&:any-link {
					text-decoration: none;
				}

				> img {
					margin: 0 2mm;
					filter: invert();

					&:first-child {
						margin: 0 2mm 0 0;
					}
					&:last-child {
						margin: 0 0 0 2mm;
					}
					&:only-child {
						margin: 0;
					}
				}
			}
			.drop {
				@spacing: 3mm;

				display: none;

				position: absolute;
				top: calc(@headerSize + @spacing);
				height: 3cm;
				width: 3cm;

				background: #000;
				&.center {
					left: 50%;
					translate: -50%;
				}
				&.right {
					right: @spacing;
				}
			}
		}
		> input:checked + div {
			background-color: @hoverColor;

			> .drop {
				display: block;
			}
		}
	}
</style>
