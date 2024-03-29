const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", (error, connection) => {
  if (error) {
    throw error;
  }

  connection.on("error", (err) => {
    console.error("AMQP connection error:", err.message);
  });

  connection.createChannel((err, channel) => {
    if (err) {
      throw err;
    }

    let queueName = "updateDashboard.service";
    let message = "Published through Node.js";

    channel.assertQueue(queueName, {
      durable: true,
    });

    channel.sendToQueue(queueName, Buffer.from(message));
    console.log(`Message sent.`);

    setTimeout(() => {
      connection.close();
    }, 1000);
  });
});
