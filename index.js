function updateStatus() {
  const currentStatus = status[currentIndex];

  client.user.setPresence({
    activities: [{ name: currentStatus.name, type: currentStatus.type }],
    status: 'dnd', // You can change the status (online, idle, dnd, invisible)
  });

  currentIndex = (currentIndex + 1) % status.length;
}

// ...

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅ Bot is ready as ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✨HAPPY NEW YEAR MY DEAR FAMILY`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ❤️WELCOME TO 2024`);
  updateStatus();

  setInterval(() => {
    updateStatus();
  }, 10000);
});

// ...
