module.exports = ({ env }) => ({
  jwtSecret: env('JWT_SECRET'),
  jwt: {
    expiresIn: '4h'
  }
});
