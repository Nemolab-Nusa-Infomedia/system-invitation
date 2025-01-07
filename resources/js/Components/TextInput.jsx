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
                    "mt-1 block h-[53px] w-full rounded-[12px] border-2 border-[#763201] text-[14px] transition-all duration-300 pr-10 focus:border-[#763201] " +
                    className
                }
                ref={localRef}
            />
        </div>
    );
});
