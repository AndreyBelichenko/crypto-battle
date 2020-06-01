export class SocketConnection {
  static socket: any;
  constructor(path: string) {
    if (SocketConnection.socket) {
      return this;
    }
    SocketConnection.socket = new WebSocket(path);
  }

  static getSocket() {
    return SocketConnection.socket;
  }
}
