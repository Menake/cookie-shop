import { createRouter } from '@/server/createRouter';

export const testRouter = createRouter()
    // create
    .query('get', {
        resolve() {
            return {
                greeting: 'welcome to my wonderful cookie shop :)',
            };
        },
    });