export default function Form({ onSubmit, children }) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-5 font-poppins">
            {children}
        </form>
    );
}
