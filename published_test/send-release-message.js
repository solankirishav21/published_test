
const { WebhookClient, MessageEmbed } = require('discord.js');

// Get the webhook ID and token from environment variables
const webhookId = process.env.DISCORD_WEBHOOK_ID;
const webhookToken = process.env.DISCORD_WEBHOOK_TOKEN;

// Create a new Discord webhook client
const webhookClient = new WebhookClient(webhookId, webhookToken);

// Function to send a release message
async function sendReleaseMessage() {
  // Create a new message embed
  const embed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('New Release')
    .setDescription('A new release has been published.');

  try {
    // Send the message embed to the Discord channel
    await webhookClient.send({
      embeds: [embed],
    });

    console.log('Release message sent successfully.');
  } catch (error) {
    console.error('Error sending release message:', error);
  }
}

// Call the function to send the release message
sendReleaseMessage();
