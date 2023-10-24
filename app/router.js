import express from 'express';
import videos from './data/videos.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home')
  });

router.get('/videos/:slug', (req, res, next) => {
    const slug = req.params.slug;
    const video = videos.find(element => element.slug === slug);
    res.render('video', {
        video: video,
    });

});

export default router;