import { rest } from 'msw';

export const handlers = [
   rest.get('products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([
            {
                id: 1,
                name: '투명렌즈',
                price: 5000
            },
            {
                id:2,
                name: '반투명렌즈',
                price: 10000,
            }
        ]))
    })
]