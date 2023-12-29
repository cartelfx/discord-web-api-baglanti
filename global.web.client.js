const express = require('express');
const app = express();

app.get('/api/discord-server-info', async (req, res) => {
  try {
    const guildId = 'SUNUCU_ID';
    const guild = await client.guilds.fetch(guildId);

    if (guild) {
      const serverName = guild.name;
      res.json({ serverName });
    } else {
      res.status(404).json({ error: 'Sunucu bulunamadı' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Sunucu bilgileri alınamadı' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
