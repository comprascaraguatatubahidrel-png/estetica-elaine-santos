'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
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
            className={cn('p-4 bg-white rounded-xl shadow-sm border border-[var(--border)]', className)}
            classNames={{
                months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
                month: 'space-y-4',
                caption: 'flex justify-center pt-2 relative items-center px-10',
                caption_label: 'text-sm font-serif font-bold text-[var(--primary-dark)] uppercase tracking-wider',
                nav: 'space-x-1 flex items-center',
                nav_button: cn(
                    'h-8 w-8 bg-transparent p-0 opacity-60 hover:opacity-100 transition-all duration-200 border border-[var(--border)] hover:bg-[var(--secondary)]/10 hover:text-[var(--primary)] rounded-full flex items-center justify-center'
                ),
                nav_button_previous: 'absolute left-2',
                nav_button_next: 'absolute right-2',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex mb-2',
                head_cell: 'text-[var(--muted-foreground)] rounded-md w-10 font-medium text-[0.7rem] uppercase tracking-tighter',
                row: 'flex w-full mt-2 justify-center',
                cell: cn(
                    'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-[var(--secondary)]/10 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
                ),
                day: cn(
                    'h-10 w-10 p-0 font-normal aria-selected:opacity-100 hover:bg-[var(--secondary)]/30 hover:text-[var(--primary-dark)] rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer'
                ),
                day_range_end: 'day-range-end',
                day_selected:
                    'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] hover:text-white focus:bg-[var(--primary)] focus:text-white shadow-lg shadow-[var(--primary)]/30 transform scale-110 z-10',
                day_today: 'bg-[var(--secondary)]/20 text-[var(--secondary-dark)] font-bold ring-2 ring-[var(--secondary)]/40',
                day_outside:
                    'day-outside text-[var(--muted-foreground)] opacity-40 aria-selected:bg-[var(--secondary)]/5 aria-selected:text-[var(--muted-foreground)] aria-selected:opacity-30',
                day_disabled: 'text-[var(--muted-foreground)] opacity-20 cursor-not-allowed line-through',
                day_range_middle:
                    'aria-selected:bg-[var(--secondary)]/20 aria-selected:text-[var(--primary-dark)]',
                day_hidden: 'invisible',
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }) => {
                    const Icon = orientation === 'left' ? ChevronLeft :
                        orientation === 'right' ? ChevronRight :
                            orientation === 'up' ? ChevronUp : ChevronDown;
                    return <Icon className="h-4 w-4" />;
                },
            }}
            {...props}
        />
    );
}
Calendar.displayName = 'Calendar';

export { Calendar };
