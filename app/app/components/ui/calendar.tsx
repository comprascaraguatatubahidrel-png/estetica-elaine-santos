'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { excludeDate } from 'react-day-picker/utils';
import { ptBR } from 'date-fns/locale';

import { cn } from '@/app/lib/utils'; // I need to create utils if not exists, or inline cn
import { buttonVariants } from '@/app/components/ui/button'; // Need to export buttonVariants or use specific styles

// Inline cn for now if utils not created, but I created utils in Button? No, I inlined it in Button.
// I should create lib/utils.ts to share cn.

function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(' ');
}

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            locale={ptBR}
            showOutsideDays={showOutsideDays}
            className={cn('p-3', className)}
            classNames={{
                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium',
                nav: 'space-x-1 flex items-center',
                nav_button: cn(
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 border border-input hover:bg-accent hover:text-accent-foreground rounded-md flex items-center justify-center'
                ),
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex',
                head_cell:
                    'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
                row: 'flex w-full mt-2',
                cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: cn(
                    'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--muted)] rounded-md flex items-center justify-center cursor-pointer transition-colors'
                ),
                day_range_end: 'day-range-end',
                day_selected:
                    'bg-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-white focus:bg-[var(--primary)] focus:text-white',
                day_today: 'bg-accent text-accent-foreground',
                day_outside:
                    'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
                day_disabled: 'text-muted-foreground opacity-50',
                day_range_middle:
                    'aria-selected:bg-accent aria-selected:text-accent-foreground',
                day_hidden: 'invisible',
                ...classNames,
            }}
            components={{
                IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
                IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
            }}
            {...props}
        />
    );
}
Calendar.displayName = 'Calendar';

export { Calendar };
