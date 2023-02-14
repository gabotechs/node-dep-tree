const path = require('path')
const childProcess = require('child_process')

const BIN = path.join(__dirname, "..", "bin", "dep-tree")

describe('dep-tree', function () {
    it('should render', async function () {
        const p = childProcess.spawn('node', [BIN, 'check', '--config', path.join(__dirname, '.dep-tree.yml')], { stdio: "inherit" })
        await new Promise((resolve, reject) => {
            p.on('exit', (code) => {
                if (code === 0) {
                    resolve()
                } else {
                    reject(new Error(`Received code ${code ?? 'unknown'}`))
                }
            })
            p.on('error', reject)
        })
    });
});
