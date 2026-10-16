import jsonServer from 'json-server';
import fs from 'fs';

export class MockApiServer {
    #config;
    #app;

    constructor(config) {
        this.#config = config;
        this.#ensureDatabaseFile();
        this.#app = this.#buildApp();
    }

    start() {
        this.#app.listen(this.#config.port, () => {
            const host = process.env.WEBSITE_HOSTNAME
                ? `https://${process.env.WEBSITE_HOSTNAME}`
                : `http://localhost:${this.#config.port}`;
            console.log(`AI-ToDu Mock API running on ${host}`);
        });
    }

    #ensureDatabaseFile() {
        if (!fs.existsSync(this.#config.dbPath)) {
            // Estructura base para AI-ToDu
            fs.writeFileSync(this.#config.dbPath, JSON.stringify({categories: [], tutorials: [], users: []}, null, 2));
        }
    }

    #buildApp() {
        const app = jsonServer.create();
        const router = jsonServer.router(this.#config.dbPath);

        app.get('/', (_req, res) => res.json({resources: Object.keys(this.#resourceState(router))}));
        app.use(jsonServer.defaults());
        app.use(jsonServer.bodyParser);
        app.get('/api/v1/health', (_req, res) => res.json({status: 'ok', time: new Date().toISOString()}));
        app.use(jsonServer.rewriter({
            '/api/v1/authentication/sign-up': '/users',
            '/api/v1/*': '/$1'
        }));
        app.use(router);

        return app;
    }

    #resourceState(router) {
        return typeof router.db.getState === 'function' ? router.db.getState() : router.db.data;
    }
}