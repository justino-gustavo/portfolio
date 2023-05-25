<script>
	import wifiIcon from 'bootstrap-icons/icons/wifi.svg?raw';
	import volumeIcon from 'bootstrap-icons/icons/volume-up.svg?raw';
	import batteryIcon from 'bootstrap-icons/icons/battery-half.svg?raw';
	import circleIcon from 'bootstrap-icons/icons/circle.svg?raw';
</script>

<nav>
	<div class="left">
		<a href=".">
			<img src={'data:image/svg+xml,' + encodeURI(circleIcon)} alt="menu" />
		</a>
	</div>
	<div class="middle">
		<input class="show" type="checkbox" id="notifications" />
		<label for="notifications" />
		<div class="dropdown">
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti deleniti repudiandae soluta dolores
				architecto omnis reprehenderit animi quos cum, iure consectetur unde quaerat odit, aperiam sit fugiat! Numquam,
				beatae?
			</p>
		</div>
	</div>
	<div class="right">
		<input class="show" type="checkbox" id="options" />
		<label for="options">
			<img src={'data:image/svg+xml,' + encodeURI(wifiIcon)} alt="wifi" />
			<img src={'data:image/svg+xml,' + encodeURI(volumeIcon)} alt="volume" />
			<img src={'data:image/svg+xml,' + encodeURI(batteryIcon)} alt="battery" />
		</label>
		<div class="dropdown">
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti deleniti repudiandae soluta dolores
				architecto omnis reprehenderit animi quos cum, iure consectetur unde quaerat odit, aperiam sit fugiat! Numquam,
				beatae?
			</p>
		</div>
	</div>
</nav>

<style lang="less">
	@bgColor: hsl(210, 55%, 5%);
	@sectionSize: @headerSize - 2mm;

	@floatMargin: 2mm;

	.nav-section(@color, @radius: 9cm) {
		border-radius: @radius;

		transition: cubic-bezier(0.86, 0, 0.07, 1) 300ms;

		&:hover {
			background-color: lighten(@color, 10%);
		}
	}

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

			.nav-section(@bgColor);

			> label, a {
				display: inline-flex;
				align-items: center;
				cursor: pointer;

				height: 100%;
				width: 100%;

				> img {
					margin: 0 2mm;

					filter: invert();
				}
			}
		}
	}

	input.show {
		display: none;

		~ .dropdown {
			display: none;

			position: absolute;
			top: calc(@headerSize + @floatMargin);
			border-radius: 5mm;
		}

		&:checked {
			~ .dropdown {
				display: block;
			}
		}
	}
</style>
