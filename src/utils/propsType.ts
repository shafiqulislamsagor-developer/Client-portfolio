import React from "react";

export interface Step {
    work: {
        name: string;
        animation: any;
        plane: boolean;
        price: number;
        dayIncrementDiscount: number;
    };
    setOrderValue: React.Dispatch<
        React.SetStateAction<{
            title: string;
            price: number;
            days: string;
            videoLink: string[];
            agree: boolean;
            video: number;
        }>
    >;
    orderValue: {
        title: string;
        price: number;
        days: string;
        videoLink: string[];
        agree: boolean;
        video: number;
    }
}