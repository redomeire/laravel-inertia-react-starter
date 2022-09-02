import './bootstrap';
import '../css/app.css';
// import '@/Components/Admin/tes.css';

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
// import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Fisip Library';

createInertiaApp({
    title: (title) => `${title} - Ruang Baca Jingga X FISIP Edu Club`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

// InertiaProgress.init({ color: '#4B5563' });
