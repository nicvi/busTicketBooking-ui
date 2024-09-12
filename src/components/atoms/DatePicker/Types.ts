import React from "react";

export interface DatePickerProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}