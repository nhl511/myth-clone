"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import {cn, formatTime} from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
    <TooltipProvider>
        <Tooltip open={props.isOpenTooltip}>
            <SliderPrimitive.Root
                ref={ref}
                className={cn(
                    "flex w-full touch-none select-none items-center",
                    className
                )}
                {...props}
            >
                <SliderPrimitive.Track
                    className={`relative ${
                        props.isHovered ? "h-[4px]" : "h-[1px]"
                    } w-full grow overflow-hidden rounded-full bg-foreground`}
                    onClick={() => {
                        props.setIsOpenTooltip(false);
                        props.handlePlay();
                    }}

                >
                    <SliderPrimitive.Range className="absolute h-full bg-primary"/>
                </SliderPrimitive.Track>
                <TooltipTrigger asChild>
                    <SliderPrimitive.Thumb
                        className={`${
                            props.isHovered ? "block" : "none"
                        } h-4 w-4 rounded-full border-none bg-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50`}
                        onClick={() => {
                            props.setIsOpenTooltip(false);
                            props.handlePlay();
                        }}
                    />
                </TooltipTrigger>
                <TooltipContent ref={props.tooltipRef} className="bg-background">
                    <p className="text-base">{formatTime(props.currentTime)}</p>
                </TooltipContent>
            </SliderPrimitive.Root>
        </Tooltip>
    </TooltipProvider>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export {Slider};
