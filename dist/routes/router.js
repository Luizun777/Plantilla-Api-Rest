"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/api/getinfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query;
    try {
        res.status(200).json({
            ok: true,
            query
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            result: 'Ocurrio un error',
            error
        });
    }
}));
router.post('/api/PostInfo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        res.status(200).json({
            ok: true,
            body
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            result: 'Ocurrio un error',
            error
        });
    }
}));
router.put('/api/putInfo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        res.status(200).json({
            ok: true,
            path: id
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            result: 'Ocurrio un error',
            error
        });
    }
}));
router.delete('/api/deleteInfo/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        res.status(200).json({
            ok: true,
            path: id
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            result: 'Ocurrio un error',
            error
        });
    }
}));
exports.default = router;
