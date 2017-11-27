import ActionCable from 'actioncable';

// 1. Configure your websocket address
const WEBSOCKET_HOST = process.env.NODE_ENV === 'production' 
                         ? 'wss://localhost:3000/cable' 
                         : 'ws://localhost:3000/cable';

export default function MessagesSubscription(
  { onUpdate = () => {} } = {}
) {
  // 2. Define our constructor
  this.cable = ActionCable.createConsumer(WEBSOCKET_HOST);
  this.channel;
  this.onUpdate = onUpdate;

  // 3. Define the function we will call to subscribe to our channel
  this.subscribe = () => {
    this.channel = this.cable.subscriptions.create(
      { channel: 'GraphqlChannel' },
      {
        connected: this.connected,
        disconnected: this.disconnected,
        received: this.received,
        rejected: this.rejected,
      }
    );
  };

  // 4. Define our default ActionCable callbacks.
  this.received = (data) => {
    console.log(`Received Data: ${data}`);

    this.onUpdate(data);
  };

  this.connected = () => {
    console.log(`Tracking Messages`);
  };

  this.disconnected = () => {
    console.warn(`Messages Tracking was disconnected.`);
  };

  this.rejected = () => {
    console.warn('I was rejected! :(');
  };
}