import express, { json } from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(json());

const pool = new Pool({
    user: "",
    host: "localhost",
    database: "hotel_db",
    port: 5432,
});

app.get("/bookings", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM bookings");
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("Server error");
    }
});

app.post("/bookings", async (req, res) => {
    try {
        const { guest_name, room_type, room_number, check_in, check_out, spa, status } = req.body;

        const result = await pool.query(
            `INSERT INTO bookings 
       (guest_name,room_type, room_number, check_in, check_out,spa,status)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
            [guest_name, room_type, room_number, check_in, check_out, spa, status]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating booking");
    }
});

app.put("/bookings/:id", async (req, res) => {
    const { id } = req.params;
    const { guest_name, room_type, room_number, check_in, check_out, spa, status } = req.body;

    try {

        const result = await pool.query(
            `UPDATE bookings 
         SET guest_name=$1, room_type=$2, room_number=$3, check_in=$4, check_out=$5, status=$6, spa=$7
         WHERE id=$8
         RETURNING *`,
            [guest_name, room_type, room_number, check_in, check_out, spa, status, id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.delete("/bookings/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM bookings WHERE id=$1", [id]);
        res.json({ success: true });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "Database error" })
    }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


