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
