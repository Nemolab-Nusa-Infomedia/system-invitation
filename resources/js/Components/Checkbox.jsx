export default function Checkbox({ className = "", ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                "w-5 h-5 border-[#763201] rounded-full text-[#763201] shadow-sm focus:ring-[#763201] hover:ring-[#763201] " +
                className
            }
        />
    );
}
