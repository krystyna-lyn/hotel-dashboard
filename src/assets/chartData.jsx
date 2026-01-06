export const bookingsLineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Bookings',
            data: [18, 25, 40, 55, 48, 60, 72],
            fill: false,
            backgroundColor: 'rgba(56,189,248,0.2)', // sky-blue
            borderColor: 'rgba(56,189,248,1)',
            tension: 0.4
        }
    ]
}

export const roomOccupancyBarData = {
    labels: ['Single Room', 'Double Room', 'Suite', 'Family Room'],
    datasets: [
        {
            label: 'Bookings per Room Type',
            data: [45, 70, 30, 20],
            backgroundColor: 'rgba(168,85,247,0.4)', // violet
            borderColor: 'rgba(168,85,247,1)',
            borderWidth: 1
        }
    ]
};
