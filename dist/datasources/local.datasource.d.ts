import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class LocalDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        dsn: string;
        connectionString: string;
        user: string;
        password: string;
    };
    constructor(dsConfig?: object);
}
