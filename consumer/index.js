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

    channel.assertQueue(queueName, {
      durable: true,
    });

    channel.consume(queueName, (msg) => {
      console.log(`Received:${msg.content.toString()}`);
    });
  });
});
