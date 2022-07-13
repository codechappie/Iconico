import React from 'react'

export interface ActivityProps {
    label: string;
}

export function ActivityIcon({ label }: ActivityProps) {
    return (
        <div>Activity Icon {label}</div>
    )
}
