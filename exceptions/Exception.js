module.exports = class Exception extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
};
