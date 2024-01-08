const PORT = process.env.PORT ?? 3001;
const express = require("express");
const cors = require("cors");
const app = express();

const pool = require("./db");

app.use(cors());

app.get("/journalEntries/:userId", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const journalEntries = await pool.query(
      "SELECT * FROM journalEntries WHERE user_id = $1",
      [userId]
    );
    res.json(journalEntries.rows);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
