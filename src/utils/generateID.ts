const characters =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function generateID() {
	const randomId = Array.from(
		{ length: 12 },
		() => characters[Math.floor(Math.random() * characters.length)]
	).join("");
	return randomId;
}
