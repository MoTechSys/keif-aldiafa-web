module.exports = {
  apps: [{
    name: 'keif-v2',
    script: 'npx',
    args: 'next start -H 0.0.0.0 -p 3000',
    cwd: '/home/user/keif-v2',
    env: { NODE_ENV: 'production', PORT: 3000 },
    watch: false, instances: 1, exec_mode: 'fork'
  }]
}
