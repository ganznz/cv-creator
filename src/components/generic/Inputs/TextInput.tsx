export default function TextInput({ id = "" }) {
    return (
        <input
            type="text"
            id={id}
            className="bg-gray-300 text-gray-500 font-bold"
        />
    );
}
