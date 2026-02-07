'use client';

import * as React from 'react';
import { DayPicker } from 'react-day-picker';
import { ptBR } from 'date-fns/locale';

import { cn } from '@/app/lib/utils'; // I need to create utils if not exists, or inline cn

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
            className={cn('p-4 bg-white rounded-xl shadow-sm border border-[var(--secondary)]/20', className)}
            classNames={{
                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-1 relative items-center mb-4',
                caption_label: 'text-base font-serif font-bold text-[var(--primary-dark)] capitalize',
                nav: 'space-x-1 flex items-center',
                nav_button: cn(
                    'h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 border border-[var(--secondary)]/30 hover:bg-[var(--secondary)]/10 hover:text-[var(--primary)] rounded-full flex items-center justify-center transition-all'
                ),
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex justify-center',
                head_cell:
                    'text-[var(--muted-foreground)] rounded-md w-10 font-medium text-[0.8rem] capitalize',
                row: 'flex w-full mt-2 justify-center',
                cell: 'h-10 w-10 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: cn(
                    'h-10 w-10 p-0 font-medium aria-selected:opacity-100 hover:bg-[var(--secondary)]/20 hover:text-[var(--primary-dark)] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200'
                ),
                day_range_end: 'day-range-end',
                day_selected:
                    'bg-[var(--primary)] text-white hover:bg-[var(--primary)] hover:text-white focus:bg-[var(--primary)] focus:text-white shadow-md',
                day_today: 'bg-[var(--secondary)]/10 text-[var(--primary-dark)] font-bold border border-[var(--secondary)]',
                day_outside:
                    'day-outside text-muted-foreground opacity-30 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
                day_disabled: 'text-muted-foreground opacity-30 line-through decoration-rose-300',
                day_range_middle:
                    'aria-selected:bg-accent aria-selected:text-accent-foreground',
                day_hidden: 'invisible',
                ...classNames,
            }}
            {...props}
        />
    );
}
Calendar.displayName = 'Calendar';

export { Calendar };
