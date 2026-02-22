import { z } from "zod";

export const bookingSchema = z.object({
    guest_name: z.string().min(1, "Guest name required"),
    room_number: z.string().min(1, "Room number required"),
    check_in: z.string(),
    check_out: z.string(),
    status: z.string(),
    room_type: z.string().min(1, "Room type required"),
    spa: z.string().optional(),

}).refine((data) => {
    if (data.room_type === "suite") {
        return data.spa;
    }
    return true;
}, {
    message: "Spa is required for suite",
    path: ["spa"],
}).refine((data) => {
    return new Date(data.check_out) >= new Date(data.check_in);
}, {
    message: "Check-out cannot be earlier than check-in",
    path: ["check_out"]
});