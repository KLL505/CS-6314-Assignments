'use strict';

class DatePicker {

    constructor(id, callback) {
        this.id = id;
        this.callback = callback;
        this.container = document.getElementById(id);
        this.container.addEventListener('click', this.handleClick.bind(this));
    }

    render(date) {
        this.currentDate = date;
        const year = date.getFullYear();
        const month = date.getMonth();

        const calendar = this.computeCalendar(year, month);
        
        this.buildDOM(calendar, year, month);
    }

    computeCalendar(year, month) {
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const startDayOfWeek = firstDayOfMonth.getDay();
        const daysInMonth = lastDayOfMonth.getDate();
        const prevMonthLastDay = new Date(year, month, 0).getDate();

        const weeks = [];
        let currentWeek = [];

        for (let i = startDayOfWeek - 1; i >= 0; i--) {
            currentWeek.push({
                day: prevMonthLastDay - i,
                isCurrentMonth: false
            });
        }

        for (let i = 1; i <= daysInMonth; i++) {
            currentWeek.push({
                day: i,
                isCurrentMonth: true,
                month: month + 1, 
                year: year
            });
            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
        }

        if (currentWeek.length > 0) {
            let nextMonthDay = 1;
            while (currentWeek.length < 7) {
                currentWeek.push({
                    day: nextMonthDay++,
                    isCurrentMonth: false
                });
            }
            weeks.push(currentWeek);
        }

        return weeks;
    }

    buildDOM(weeks, year, month) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        // Construct header using provided CSS classes
        let html = `
            <div class="datepicker-header">
                <button class="prev-month">&lt;</button>
                <span class="datepicker-title">${monthNames[month]} ${year}</span>
                <button class="next-month">&gt;</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
                    </tr>
                </thead>
                <tbody>
        `;

        // Construct calendar grid
        for (const week of weeks) {
            html += '<tr>';
            for (const dayObj of week) {
                if (dayObj.isCurrentMonth) {
                    // Embed date data into attributes for easy retrieval upon click
                    html += `<td class="day" data-day="${dayObj.day}" data-month="${dayObj.month}" data-year="${dayObj.year}">${dayObj.day}</td>`;
                } else {
                    html += `<td class="day outside-month">${dayObj.day}</td>`;
                }
            }
            html += '</tr>';
        }

        html += `
                </tbody>
            </table>
        `;

        this.container.innerHTML = html;
    }

    handleClick(event) {
        const target = event.target;

        if (target.classList.contains('prev-month')) {
            const prevMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1);
            this.render(prevMonth);
            return;
        }

        if (target.classList.contains('next-month')) {
            const nextMonth = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
            this.render(nextMonth);
            return;
        }

        if (target.classList.contains('day') && !target.classList.contains('outside-month')) {
            const day = parseInt(target.getAttribute('data-day'), 10);
            const month = parseInt(target.getAttribute('data-month'), 10);
            const year = parseInt(target.getAttribute('data-year'), 10);

            this.callback(this.id, { month, day, year });
        }
    }
}