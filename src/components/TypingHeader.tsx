"use client";

import { TypeAnimation } from "react-type-animation";

type TypingHeaderProps = {
    title: string;
    className: string;
}

export function TypingHeader({ title, className }: TypingHeaderProps) {
    return (
        <TypeAnimation
                sequence={[
                    title,
                    3000,
                    '',
                    1000
                ]}
                speed={50}
                style={{
                    backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundImage: "linear-gradient(to right, #ff00a9, #ff6c00)",
                }}
                className={className}
                repeat={Infinity}
            />
    );
}