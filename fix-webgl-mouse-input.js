const oRequestPointerLock = Element.prototype.requestPointerLock;
Element.prototype.requestPointerLock = async function requestPointerLockHk(...args) {
	try {
		(args[0] ||= {}).unadjustedMovement = true;
		await oRequestPointerLock.apply(this, args);
	} catch (err) {
		console.log(err);
	}
};
