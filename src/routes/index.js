// Layouts
import routesConfig from '~/config/routes';
import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Publish Routes
const publishRoutes = [
    { path: routesConfig.home, components: Home },
    { path: routesConfig.following, components: Following },
    { path: routesConfig.profile, components: Profile },
    { path: routesConfig.upload, components: Upload, layout: HeaderOnly },
    { path: routesConfig.search, components: Search, layout: null },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
