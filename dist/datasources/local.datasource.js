"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Local',
    connector: 'ibmi',
    dsn: '',
    connectionString: 'DSN=*LOCAL',
    user: '',
    password: ''
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let LocalDataSource = class LocalDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
LocalDataSource.dataSourceName = 'Local';
LocalDataSource.defaultConfig = config;
LocalDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Local', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], LocalDataSource);
exports.LocalDataSource = LocalDataSource;
//# sourceMappingURL=local.datasource.js.map