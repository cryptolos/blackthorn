import startup from './utils/startup';

const PORT = process.env.PORT || 3000;

startup.app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
