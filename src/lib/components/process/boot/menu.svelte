<section id="grub">
	<ul>
		<li class="active">Linux Gnome</li>
		<li>Linux Gnome (recovery)</li>
		<li>UEFI Options</li>
	</ul>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum aliquid numquam corporis nisi, debitis ipsa
		voluptate quo sed laudantium facilis, pariatur tempore expedita quod quia est suscipit quae. Minima, possimus!
	</p>
</section>

<style lang="less">
	section#grub {
		height: 100%;
		width: 100%;

		padding: 5mm;

		display: flex;
		flex-direction: column;

		justify-content: space-between;

		> ul {
			border: solid 1mm white;
			padding: 3mm;

			list-style: none;

			> li {
				padding-block: 2mm;

				cursor: pointer;

				&:hover, &.active {
					background-color: rgba(255, 255, 255, 0.247);
				}
			}
		}

    > p {
      text-align: justify center;
    }
	}
</style>
