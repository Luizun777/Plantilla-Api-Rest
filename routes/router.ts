import {Router, Request, Response} from 'express';
const router = Router();

router.get('/api/getinfo', async (req: Request, res: Response) => {
    const query = req.query;
    try {
        res.status(200).json({
        ok: true,
        query
        });
    } catch (error) {
        res.status(500).json({
        ok: false,
        result: 'Ocurrio un error',
        error
        });
    }
});

router.post('/api/PostInfo', async (req: Request, res: Response) => {
    const body = req.body;
    try {
        res.status(200).json({
            ok: true,
            body
        });
    } catch (error) {
        res.status(500).json({
        ok: false,
        result: 'Ocurrio un error',
        error
        });
    }
});

router.put('/api/putInfo/:id', async (req: Request, res: Response) => {
const id = req.params.id;
    try {
        res.status(200).json({
        ok: true,
        path: id
        });
    } catch (error) {
        res.status(500).json({
        ok: false,
        result: 'Ocurrio un error',
        error
        });
    }
});

router.delete('/api/deleteInfo/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
        try {
            res.status(200).json({
            ok: true,
            path: id
            });
        } catch (error) {
            res.status(500).json({
            ok: false,
            result: 'Ocurrio un error',
            error
            });
        }
    });

export default router;