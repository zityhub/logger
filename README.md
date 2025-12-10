# logger

## Installation

Install it as a development dependency:

```sh
pnpm add @zityhub/logger
```

## Usage

```
import { Logger } from '@zityhub/logger';

const log = new Logger('my-service', true);

log.info('Service started');
log.debug({ requestId: 'abc123', route: '/users' });
log.error('Database unreachable');
```
