import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

export default forwardRef(function TextInput(
    { type = "text", className = "", icon = "", isFocused = false, ...props },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <div className="relative" id="email">
            <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                {icon ? <img src={icon} alt="Email icon" /> : ""}
            </div>
            <input
                {...props}
                type={type}
                className={
                    "mt-1 block h-[53px] text-gray-400 w-full rounded-lg border border-gray-300 text-[14px] transition-all duration-300 pr-10 " +
                    className
                }
                ref={localRef}
            />
        </div>
    );
});
