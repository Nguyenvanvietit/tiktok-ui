// Layouts
import config from '~/config';
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

// Publish Routes
const publishRoutes = [
    { path: config.routes.home, components: Home },
    { path: config.routes.following, components: Following },
    { path: config.routes.profile, components: Profile },
    { path: config.routes.live , components: Live},
    { path: config.routes.upload, components: Upload, layout: HeaderOnly },
    { path: config.routes.search, components: Search, layout: null },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
