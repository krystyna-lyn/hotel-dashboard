import { useEffect, useMemo, useState } from "react";
import { getBookings } from "../../services/bookingService";

const STATUS_CONFIG = {
  confirmed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  pending:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  cancelled:
    "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
};

const STATUS_LABEL = {
  confirmed: "Confirmed",
  pending: "Pending",
  cancelled: "Cancelled",
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const createPlaceholderEmail = (name) =>
  `${name.toLowerCase().trim().replace(/\s+/g, ".")}@guest.hotel`;

const Guests = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await getBookings();
      setBookings(response.data || []);
    };

    fetchBookings();
  }, []);

  const guestDirectory = useMemo(() => {
    // Keep one row per guest using the most recent check-in.
    const latestByGuest = new Map();

    bookings.forEach((booking) => {
      if (!booking?.guest_name) return;

      const current = latestByGuest.get(booking.guest_name);
      const isMoreRecent =
        !current || new Date(booking.check_in) > new Date(current.check_in);

      if (isMoreRecent) {
        latestByGuest.set(booking.guest_name, booking);
      }
    });

    return [...latestByGuest.values()].sort(
      (a, b) => new Date(b.check_in) - new Date(a.check_in)
    );
  }, [bookings]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-50 tracking-tight">
          Guest Directory
        </h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          Generated from your bookings for front desk operations.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-stone-100 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-card">
        <div className="grid grid-cols-12 gap-3 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-stone-500 dark:text-stone-400 border-b border-stone-100 dark:border-stone-800">
          <div className="col-span-3">Guest</div>
          <div className="col-span-4">Email</div>
          <div className="col-span-2">Phone</div>
          <div className="col-span-1">Room</div>
          <div className="col-span-2">Stay</div>
        </div>

        <ul>
          {guestDirectory.length === 0 && (
            <li className="px-4 py-8 text-sm text-center text-stone-500 dark:text-stone-400">
              No guests yet. Create bookings to populate this list.
            </li>
          )}

          {guestDirectory.map((guest) => (
            <li
              key={guest.id}
              className="grid grid-cols-12 gap-3 px-4 py-4 border-b border-stone-100 dark:border-stone-800 last:border-b-0"
            >
              <div className="col-span-3">
                <p className="text-sm font-medium text-stone-900 dark:text-stone-50">
                  {guest.guest_name}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Booking #{guest.id}
                </p>
              </div>
              <p className="col-span-4 text-sm text-stone-600 dark:text-stone-300 break-all">
                {guest.email || createPlaceholderEmail(guest.guest_name)}
              </p>
              <p className="col-span-2 text-sm text-stone-600 dark:text-stone-300">
                {guest.phone || "Not provided"}
              </p>
              <p className="col-span-1 text-sm text-stone-700 dark:text-stone-200">
                {guest.room_number}
              </p>
              <div className="col-span-2 flex flex-col gap-1">
                <span
                  className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_CONFIG[guest.status] || STATUS_CONFIG.pending}`}
                >
                  {STATUS_LABEL[guest.status] || "Pending"}
                </span>
                <span className="text-xs text-stone-500 dark:text-stone-400">
                  {formatDate(guest.check_in)} - {formatDate(guest.check_out)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Guests;