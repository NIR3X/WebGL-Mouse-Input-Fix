# WebGL Mouse Input Fix - Fix for High Polling Rates

This code provides a fix for the WebGL mouse input issue caused by high polling rates in browsers like Chromium. It overrides the `requestPointerLock` function to include the `unadjustedMovement` option.

## Usage

Add the following code before all scripts in your game or application's `index.html`:

```html
<script>
	const oRequestPointerLock = Element.prototype.requestPointerLock;
	Element.prototype.requestPointerLock = async function requestPointerLockHk() {
		try {
			const args = [...arguments];
			args[0] ||= {};
			args[0].unadjustedMovement = true;
			await oRequestPointerLock.apply(this, args);
		} catch (err) {
			console.log(err);
		}
	};
</script>
```

## License

[![GNU AGPLv3 Image](https://www.gnu.org/graphics/agplv3-155x51.png)](https://www.gnu.org/licenses/agpl-3.0.html)

This program is Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
