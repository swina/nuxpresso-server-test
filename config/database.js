module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'https://ec2-54-91-178-234.compute-1.amazonaws.com',
        port: '5432',
        database: 'd3bgqvc6mmaei1',
        username: 'vgqpubuoxylsaa',
        password: 'ac21b7ac1187a5ed97c3a802272c9e32ead0ac01bb5ad6f80a29a4588568cda6',
        ssl: false,
      },
      options: {}
    },
  },
});
