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
    database: "",
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
        const { guest_name, room_number, check_in, check_out, status } = req.body;

        const result = await pool.query(
            `INSERT INTO bookings 
       (guest_name, room_number, check_in, check_out, status)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
            [guest_name, room_number, check_in, check_out, status]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating booking");
    }
});

app.put("/bookings/:id", async (req, res) => {
    const { id } = req.params;
    const { guest_name, room_number, check_in, check_out, status } = req.body;

    try {

        const result = await pool.query(
            `UPDATE bookings 
         SET guest_name=$1, room_number=$2, check_in=$3, check_out=$4, status=$5
         WHERE id=$6
         RETURNING *`,
            [guest_name, room_number, check_in, check_out, status, id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


