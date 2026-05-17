const express = require('express');
import routes from './routes/index';

const app = express();
const port = 1245;

app.use('/',routes);

app.listen(port, () => {
	console.log(`Server running @ ${port}`);
});

export default app;
